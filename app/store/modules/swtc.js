import * as applicationSettings from "tns-core-modules/application-settings"

const state = {
    swtcWallets: JSON.parse(applicationSettings.getString('SWTCWALLETS') || '[]'),
    swtcServers: JSON.parse(applicationSettings.getString('SWTCSERVERS') || '[]'),
    swtcLedgers: [],
    swtcWallet: {},
    swtcServer: {},
    swtcSequence: 0,
    swtcBalance: 0,
    swtcPrice: 0,
    //swtcRemote: null,
 }
const getters = {
    swtcLedgers: (state) => state.swtcLedgers,
    swtcWallets: (state) => state.swtcWallets,
    swtcWallet: (state) => state.swtcWallet,
    swtcServers: (state) => state.swtcServers,
    swtcServer: (state) => state.swtcServer,
    swtcSequence: (state) => state.swtcSequence,
    swtcBalance: (state) => state.swtcBalance,
    swtcPrice: (state) => state.swtcPrice,
    //swtcRemote: (state) => state.swtcRemote,
}
const mutations = {
    addSwtcLedger: (state, v) => state.swtcLedgers.unshift(v),
    addSwtcWallet: (state, v) => state.swtcWallets.unshift(v),
    removeSwtcWallet: (state, v) => state.swtcWallets.splice(state.swtcWallets.indexOf(v),1),
    setSwtcWallet: (state, v) => state.swtcWallet = Object.assign({}, {address: v.address, secret: v.secret}),
    addSwtcServer: (state, v) => state.swtcServers.unshift(v),
    removeSwtcServer: (state, v) => state.swtcServers.splice(state.swtcServers.indexOf(v),1),
    saveSwtcWallets: (state) => applicationSettings.setString('SWTCWALLETS', JSON.stringify(state.swtcWallets)),
    saveSwtcServers: (state) => applicationSettings.setString('SWTCSERVERS', JSON.stringify(state.swtcServers)),
    setSwtcServer: (state, v) => state.swtcServer = v,
}
const actions = {
}
export default {
  state,
  getters,
  mutations,
  actions
}