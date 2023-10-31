const { app } = require('@azure/functions');
const { generateEmailContent } = require('../../lib/openai');
const { uploadJsonToBlobStorage } = require('../../lib/storage');

const generateEmail = async (sentiment, topic) => {
  const content = await generateEmailContent(sentiment, topic)

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

  return email
}

app.http('generateEmail', {
  methods: ['POST'] ,
  authLevel: 'anonymous',
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);

    const noEmails = request.query.get('noEmails')
    const sentiment = request.query.get('sentiment')
    const topic = request.query.get('topic')

    const emails = []

    for (let i = 0; i < noEmails; i++) {
      const email = await generateEmail(sentiment, topic)

      await uploadJsonToBlobStorage('emails', email, {
        sentiment,
        topic
      })

      emails.push(email)
    }

    return { body: JSON.stringify(emails) }
  }
});
