(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{377:function(e,r,t){"use strict";t.r(r);var n=t(39),a=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("之前说了基本的"),t("code",[e._v("fill order")]),e._v("的流程，由"),t("code",[e._v("maker")]),e._v("和"),t("code",[e._v("taker")]),e._v("可以直接进行交易，是否引入"),t("code",[e._v("relayer")]),e._v("都可以，这是一般"),t("code",[e._v("open orderbook")]),e._v("的策略。另一种策略是"),t("code",[e._v("matching")]),e._v("，它指用户A，用户B它们分别下定单希望进行交易，刚好它们的订单可以匹配，这时由"),t("code",[e._v("relayer")]),e._v("进行"),t("code",[e._v("matchOrders")]),e._v("来完成交易。")]),e._v(" "),t("p",[e._v("需要注意的是订单金额不一定需要完全匹配。如订单A卖出1"),t("code",[e._v("WETH")]),e._v("买入10"),t("code",[e._v("ZRX")]),e._v(",订单B卖出10"),t("code",[e._v("ZRX")]),e._v("买入1"),t("code",[e._v("WETH")]),e._v(",这是一种完全匹配的情况。但是不完全匹配一样可以交易成功，如订单A卖出1"),t("code",[e._v("WETH")]),e._v("买入4"),t("code",[e._v("ZRX")]),e._v(",订单B卖出10"),t("code",[e._v("ZRX")]),e._v("买入1"),t("code",[e._v("WETH")]),e._v("，这个时候可以发现，在订单B可以满足订单A，订单A也可以满足订单B，会多余出6"),t("code",[e._v("ZRX")]),e._v(",因为A只买入4"),t("code",[e._v("ZRX")]),e._v(",B卖出了10"),t("code",[e._v("ZRX")]),e._v("，这6个"),t("code",[e._v("ZRX")]),e._v("的差价就由订单的Matcher获得。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Order A     1 WETH  ->  4 ZRX\nOrder B     10 ZRX  ->  1 WETH \nMatcher             ->  6 ZRX\n")])])]),t("p",[e._v("这6个"),t("code",[e._v("ZRX")]),e._v("的差价就变成了"),t("code",[e._v("Matcher")]),e._v("的收入,当然只有差价有冗余的时候才可以匹配订单，如果超出了兑换数量则也无法匹配，如订单A卖出1"),t("code",[e._v("WETH")]),e._v("买入15"),t("code",[e._v("ZRX")]),e._v(",订单B卖出10"),t("code",[e._v("ZRX")]),e._v("买入1"),t("code",[e._v("WETH")]),e._v(",这种情况就无法进行匹配，尝试匹配订单会返回匹配失败。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("┌─────────────────┬────────────────────────────────────────────────────────────────────┐\n│ matchOrders     │ 0xbd3bbda041b944502f1e735756de721a756438db0e63716394687d79562cd97e │\n├─────────────────┼────────────────────────────────────────────────────────────────────┤\n│ left orderHash  │ 0xc3542f0cfa9ba9acca4d94c83265515ae8bfe683d072a905d950d909d6368c1b │\n├─────────────────┼────────────────────────────────────────────────────────────────────┤\n│ right orderHash │ 0x37751bf8d3a016c7e15eded7d06962e19afd0575e52368b61424b8f3d3b7b888 │\n├─────────────────┼────────────────────────────────────────────────────────────────────┤\n│ gasUsed         │ 95539                                                              │\n├─────────────────┼────────────────────────────────────────────────────────────────────┤\n│ status          │ Failure                                                            │\n└─────────────────┴────────────────────────────────────────────────────────────────────┘\n")])])]),t("p",[e._v("需要注意的是，如果尝试匹配并匹配失败仍然需要支付对应的"),t("code",[e._v("Gas")]),e._v("，这样就得不偿失了。")]),e._v(" "),t("p",[e._v("除了金额的匹配，需要注意的还有交易费用的问题，交易费用不会进行匹配，即交易费用的多少不影响是否匹配成功，如订单A的MakerFee为5"),t("code",[e._v("ZRX")]),e._v("TakerFee为10"),t("code",[e._v("ZRX")]),e._v("，订单A的MakerFee为10"),t("code",[e._v("ZRX")]),e._v("TakerFee为20"),t("code",[e._v("ZRX")]),e._v("，虽然相对于订单A它的Taker就是订单B的Maker，但是它们并不是直接进行交易的，MakerFee毫无疑问由它们自身承担，但是TakerFee承担者并不是对方，而是"),t("code",[e._v("Matcher")]),e._v("。"),t("code",[e._v("Matcher")]),e._v("会支付双方订单中"),t("code",[e._v("TakerFee")]),e._v("的交易费用。")]),e._v(" "),t("p",[e._v("之后我们来看看0x-start-project中"),t("code",[e._v("match_order")]),e._v("的源码:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\tPrintUtils.printScenario('Match Orders');\n    // Initialize the ContractWrappers, this provides helper functions around calling\n    // 0x contracts as well as ERC20/ERC721 token contracts on the blockchain\n    const contractWrappers = new ContractWrappers(providerEngine, { networkId: NETWORK_CONFIGS.networkId });\n    // Initialize the Web3Wrapper, this provides helper functions around fetching\n    // account information, balances, general contract logs\n    const web3Wrapper = new Web3Wrapper(providerEngine);\n    // 用户地址\n    // matcherAccount为撮合者地址，一般是Relayer\n    const [leftMaker, rightMaker, matcherAccount] = await web3Wrapper.getAvailableAddressesAsync();\n    // 待交易代币地址\n    const zrxTokenAddress = contractAddresses.zrxToken;\n    const etherTokenAddress = contractAddresses.etherToken;\n    const printUtils = new PrintUtils(\n        web3Wrapper,\n        contractWrappers,\n        { leftMaker, rightMaker, matcherAccount },\n        { WETH: etherTokenAddress, ZRX: zrxTokenAddress },\n    );\n    // 打印账户信息\n    printUtils.printAccounts();\n\n    // 设置交易金额\n    // the amount the maker is selling of maker asset\n    const makerAssetAmount = Web3Wrapper.toBaseUnitAmount(new BigNumber(10), DECIMALS);\n    // the amount the maker wants of taker asset\n    const takerAssetAmount = Web3Wrapper.toBaseUnitAmount(new BigNumber(0.4), DECIMALS);\n    // 0x v2 uses hex encoded asset data strings to encode all the information needed to identify an asset\n    // 交易代币数据\n    const makerAssetData = assetDataUtils.encodeERC20AssetData(zrxTokenAddress);\n    const takerAssetData = assetDataUtils.encodeERC20AssetData(etherTokenAddress);\n    let txHash;\n    let txReceipt;\n\n    // 设置代币授权\n    // Allow the 0x ERC20 Proxy to move ZRX on behalf of makerAccount\n    const leftMakerZRXApprovalTxHash = await contractWrappers.erc20Token.setUnlimitedProxyAllowanceAsync(\n        zrxTokenAddress,\n        leftMaker,\n    );\n    await printUtils.awaitTransactionMinedSpinnerAsync('Left Maker ZRX Approval', leftMakerZRXApprovalTxHash);\n\n    // Approve the ERC20 Proxy to move ZRX for rightMaker\n    const rightMakerZRXApprovalTxHash = await contractWrappers.erc20Token.setUnlimitedProxyAllowanceAsync(\n        zrxTokenAddress,\n        rightMaker,\n    );\n    await printUtils.awaitTransactionMinedSpinnerAsync('Right Maker ZRX Approval', rightMakerZRXApprovalTxHash);\n\n    // Approve the ERC20 Proxy to move ZRX for matcherAccount\n    // TODO:为什么需要对matcher的zrx账户进行授权？matcher需要支出交易费用?应该不需要\n    const matcherZRXApprovalTxHash = await contractWrappers.erc20Token.setUnlimitedProxyAllowanceAsync(\n        zrxTokenAddress,\n        matcherAccount,\n    );\n    await printUtils.awaitTransactionMinedSpinnerAsync('Matcher ZRX Approval', matcherZRXApprovalTxHash);\n\n    // Approve the ERC20 Proxy to move WETH for rightMaker\n    const rightMakerWETHApprovalTxHash = await contractWrappers.erc20Token.setUnlimitedProxyAllowanceAsync(\n        etherTokenAddress,\n        rightMaker,\n    );\n    await printUtils.awaitTransactionMinedSpinnerAsync('Right Maker WETH Approval', rightMakerZRXApprovalTxHash);\n\n    // Convert ETH into WETH for taker by depositing ETH into the WETH contract\n    const rightMakerWETHDepositTxHash = await contractWrappers.etherToken.depositAsync(\n        etherTokenAddress,\n        takerAssetAmount,\n        rightMaker,\n    );\n    await printUtils.awaitTransactionMinedSpinnerAsync('Right Maker WETH Deposit', rightMakerWETHDepositTxHash);\n\n    PrintUtils.printData('Setup', [\n        ['Left Maker ZRX Approval', leftMakerZRXApprovalTxHash],\n        ['Right Maker ZRX Approval', rightMakerZRXApprovalTxHash],\n        ['Matcher Maker ZRX Approval', matcherZRXApprovalTxHash],\n        ['Right Maker WETH Approval', rightMakerWETHApprovalTxHash],\n        ['RIght Maker WETH Deposit', rightMakerWETHDepositTxHash],\n    ]);\n\n    // Set up the Order and fill\n    // 订单过期时间\n    const randomExpiration = getRandomFutureDateInSeconds();\n    const exchangeAddress = contractAddresses.exchange;\n\n    // Create the order\n    // 创建订单A\n    const leftOrder: Order = {\n        exchangeAddress,\n        makerAddress: leftMaker,\n        takerAddress: NULL_ADDRESS,\n        senderAddress: NULL_ADDRESS,\n        feeRecipientAddress: NULL_ADDRESS,\n        expirationTimeSeconds: randomExpiration,\n        salt: generatePseudoRandomSalt(),\n        makerAssetAmount,\n        takerAssetAmount,\n        makerAssetData,\n        takerAssetData,\n        makerFee: ZERO,\n        takerFee: Web3Wrapper.toBaseUnitAmount(new BigNumber(0.01), DECIMALS),\n    };\n    PrintUtils.printData('Left Order', Object.entries(leftOrder));\n\n    // Create the matched order\n    // 创建订单B\n    // 它们交易金额不一致\n    const rightOrderTakerAssetAmount = Web3Wrapper.toBaseUnitAmount(new BigNumber(4), DECIMALS);\n    const rightOrder: Order = {\n        exchangeAddress,\n        makerAddress: rightMaker,\n        takerAddress: NULL_ADDRESS,\n        senderAddress: NULL_ADDRESS,\n        feeRecipientAddress: NULL_ADDRESS,\n        expirationTimeSeconds: randomExpiration,\n        salt: generatePseudoRandomSalt(),\n        makerAssetAmount: leftOrder.takerAssetAmount,\n        takerAssetAmount: rightOrderTakerAssetAmount,\n        makerAssetData: leftOrder.takerAssetData,\n        takerAssetData: leftOrder.makerAssetData,\n        makerFee: ZERO,\n        takerFee: Web3Wrapper.toBaseUnitAmount(new BigNumber(0.01), DECIMALS),\n    };\n    PrintUtils.printData('Right Order', Object.entries(rightOrder));\n\n    // 分别对订单进行签名\n    // Generate the order hash and sign it\n    const leftOrderHashHex = orderHashUtils.getOrderHashHex(leftOrder);\n    const leftOrderSignature = await signatureUtils.ecSignHashAsync(providerEngine, leftOrderHashHex, leftMaker);\n    const leftSignedOrder = { ...leftOrder, signature: leftOrderSignature };\n\n    // Generate the order hash and sign it\n    const rightOrderHashHex = orderHashUtils.getOrderHashHex(rightOrder);\n    const rightOrderSignature = await signatureUtils.ecSignHashAsync(providerEngine, rightOrderHashHex, rightMaker);\n    const rightSignedOrder = { ...rightOrder, signature: rightOrderSignature };\n\n    // Print out the Balances and Allowances\n    await printUtils.fetchAndPrintContractAllowancesAsync();\n    await printUtils.fetchAndPrintContractBalancesAsync();\n\n    // Match the orders via 0x Exchange\n    // 执行交易订单匹配\n    txHash = await contractWrappers.exchange.matchOrdersAsync(leftSignedOrder, rightSignedOrder, matcherAccount, {\n        gasLimit: TX_DEFAULTS.gas,\n    });\n\n    txReceipt = await printUtils.awaitTransactionMinedSpinnerAsync('matchOrders', txHash);\n    printUtils.printTransaction('matchOrders', txReceipt, [\n        ['left orderHash', leftOrderHashHex],\n        ['right orderHash', rightOrderHashHex],\n    ]);\n")])])])])}),[],!1,null,null,null);r.default=a.exports}}]);