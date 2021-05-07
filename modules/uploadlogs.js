const axios = require('axios');
const mimeType = require('mime-types');

const contentTypes = ['text/plain'];

module.exports = client => {
    client.on('message', async message => {
        //Check correct message type
        if (message.channel.type !== 'text' || message.author.bot) return;
        if (!message.attachments) return;

        
        for (const attachment of message.attachments.values()) {
            //Check file type
          let contentType = mimeType.lookup(attachment.url);
          if (!contentTypes.some(type => contentType === type) || !attachment.name.endsWith('.log')) continue;
    
          try {
            let content = await axios.get(attachment.url);
            let response = await axios.post(`https://api.mclo.gs/1/log `, content.data);
    
            await message.channel.send(
              `Please use <https://mclo.gs/> to send logs in the future. I have automatically uploaded \`${attachment.name}\` for you: ${response.url}`
            );
          } catch (e) {
            await message.channel.send(
              `Your file could not be automatically uploaded. Please use https://mclo.gs/ to share files.`
            );
          }
        }
      });
}