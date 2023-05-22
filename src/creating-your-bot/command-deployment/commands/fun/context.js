const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js')

const data = new ContextMenuCommandBuilder()
  .setName('FaceMagic')
  .setType(ApplicationCommandType.Message)

module.exports = {
  data,
  async execute (interaction) {
    // const message = interaction.targetMessage
    // attachments: Collection(1) [Map] {
    //   '1110035947766173738' => Attachment {
    //     attachment: 'https://cdn.discordapp.com/attachments/964447050110488579/1110035947766173738/jennifer_ins_ins.jpg',
    //     name: 'jennifer_ins_ins.jpg',
    //     id: '1110035947766173738',
    //     size: 113811,
    //     url: 'https://cdn.discordapp.com/attachments/964447050110488579/1110035947766173738/jennifer_ins_ins.jpg',
    //     proxyURL: 'https://media.discordapp.net/attachments/964447050110488579/1110035947766173738/jennifer_ins_ins.jpg',
    //     height: 773,
    //     width: 540,
    //     contentType: 'image/jpeg',
    //     description: null,
    //     ephemeral: false,
    //     duration: null,
    //     waveform: null
    //   }
    // }
    return interaction.reply('Done')
  }
}
