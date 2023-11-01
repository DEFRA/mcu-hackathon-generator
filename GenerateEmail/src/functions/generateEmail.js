const { app } = require('@azure/functions');
const { generateEmailContent } = require('../lib/openai');
const { uploadJsonToBlobStorage } = require('../lib/storage');

const generateEmail = async () => {
  const content = await generateEmailContent()

  const email = {
    new: true,
    sender: "aPerson@email.com",
    received: new Date(),
    hasAttachments: true,
    attachments: {
      "1": "myphoto.jpeg",
      "2": "myletter.docx",
    },
    subject: content.subject,
    body: content.body
  }

  return {
    email,
    metadata: {
      sentiment: content.sentiment,
      topic: content.topic,
      confidential: content.confidential,
      emotion: content.emotion,
      member_of_parliament: content.member_of_parliament
    }
  }
}

app.http('generateEmail', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);

    const email = await generateEmail()

    await uploadJsonToBlobStorage('emails', email.email, email.metadata)

    return { body: JSON.stringify(email) }
  }
});
