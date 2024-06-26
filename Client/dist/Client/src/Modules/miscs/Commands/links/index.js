"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../../../../..");
const Commands_1 = __importDefault(require("../../../../Class/Commands"));
const options_1 = __importDefault(require("./options"));
const cmd = new Commands_1.default(options_1.default, []);
cmd.setHandler({}, async (interaction) => {
    await interaction.deferReply({ ephemeral: true });
    const redirect_uri = encodeURIComponent(`${__1.Client.Vars.Discord.REDIRECTION_URI}/callback`), state = encodeURIComponent(JSON.stringify({
        guild: interaction.guildId,
        bot: interaction.client.user.id
    })), callbackURL = `${__1.Client.Vars.Discord.API_BASE}/oauth2/authorize?client_id=${__1.Client.user.id}&redirect_uri=${redirect_uri}${encodeURI("&response_type=code&scope=identify guilds.join")}&state=${state}`;
    var str = "";
    str += `oAuth: **${callbackURL}**\n\n`;
    str += `Bot: **https://discord.com/api/oauth2/authorize?client_id=${__1.Client.user.id}&permissions=8&scope=bot%20applications.commands**\n\n`;
    interaction.editReply({
        content: str
    });
    return true;
});
exports.default = cmd;
//# sourceMappingURL=index.js.map