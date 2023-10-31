const axios = require('axios');

const api_base = process.env.OPEN_AI_ENDPOINT;

const api_key = process.env.AD_TOKEN;
const api_version = '2023-03-15-preview';
const engine = 'gpt-4-32k';

const generateEmailContent = async (category, topic) => {
    const messages = [{'role': 'user', 'content': `write an ${category} email regarding ${topic} in three sentences in json format (subject and body)`}];
  
    try {
      const response = await axios.post(`${api_base}/openai/deployments/${engine}/chat/completions?api-version=${api_version}`, {
        messages
      }, {
            headers: {
                'Authorization': `Bearer ${api_key}`,
                'Content-Type': 'application/json'
            }
      });
      
      return JSON.parse(response.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
      throw error;
    }   
}

module.exports = {
    generateEmailContent
}
