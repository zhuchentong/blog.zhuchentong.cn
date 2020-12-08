(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{427:function(e,n,t){"use strict";t.r(n);var r=t(39),a=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("上次说了"),t("code",[e._v("ERC20")]),e._v(",也就是一般的代币使用的合约接口，通过这种合同可以快速实现一种代币的开发。还有另外一种常见的合约接口"),t("code",[e._v("ERC721")]),e._v(",其中比较出名的"),t("code",[e._v("以太猫（CryptoKitties）")]),e._v("就是使用的"),t("code",[e._v("ERC721")]),e._v("。\n"),t("code",[e._v("ERC721")]),e._v("的特点是它的代币是不可以被分割并却独一无二的，如以太猫中的猫咪一样，每一个都是唯一的有着自己的TokenID。\n因为每个TokenID可能对应着一种自定义的结构，在ERC721中，没有定义对应Token的结构，他定义了用户账户和TokenID之间的对应关系，需要自己定义TokenID和数据结构之间的关系。\n另外就是和"),t("code",[e._v("ERC20")]),e._v("的授权金额不同，"),t("code",[e._v("ERC721")]),e._v("有两种授权模式，一种是对对应tokenID的授权，被授权者有权利使用对应TokenID的代币，还有一种是全部授权，被授权者有权利使用对应账户下所有的Token。")]),e._v(" "),t("p",[e._v("另外还有一点就是"),t("code",[e._v("openzeppelin")]),e._v("的"),t("code",[e._v("ERC721")]),e._v("继承了"),t("code",[e._v("ERC165")]),e._v("，这个合约可以被扫描到暴露的接口。详细的我还不是很清楚，后续会继续了解。")]),e._v(" "),t("p",[e._v("在"),t("code",[e._v("ERC721")]),e._v("目录下存在以下文件:")]),e._v(" "),t("ul",[t("li",[t("h5",{attrs:{id:"erc721-sol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#erc721-sol"}},[e._v("#")]),e._v(" ERC721.sol")])])]),e._v(" "),t("p",[e._v("ERC721的合约文件")]),e._v(" "),t("ul",[t("li",[t("h5",{attrs:{id:"erc721burnable-sol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#erc721burnable-sol"}},[e._v("#")]),e._v(" ERC721Burnable.sol")])])]),e._v(" "),t("p",[e._v("在ERC721基础上添加了燃币操作")]),e._v(" "),t("ul",[t("li",[t("h5",{attrs:{id:"erc721enumerable-sol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#erc721enumerable-sol"}},[e._v("#")]),e._v(" ERC721Enumerable.sol")])])]),e._v(" "),t("p",[e._v("在ERC721的基础上对访问性进行了扩展(需要再看看源码加深了解)")]),e._v(" "),t("ul",[t("li",[t("h5",{attrs:{id:"erc721full-sol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#erc721full-sol"}},[e._v("#")]),e._v(" ERC721Full.sol")])])]),e._v(" "),t("p",[e._v("在ERC721的基础上继承了ERC721Enumerable, ERC721Metadata")]),e._v(" "),t("ul",[t("li",[t("h5",{attrs:{id:"erc721holder-sol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#erc721holder-sol"}},[e._v("#")]),e._v(" ERC721Holder.sol")])])]),e._v(" "),t("p",[e._v("TODO:这个不是很清楚")]),e._v(" "),t("ul",[t("li",[t("h5",{attrs:{id:"erc721metadata-sol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#erc721metadata-sol"}},[e._v("#")]),e._v(" ERC721Metadata.sol")])])]),e._v(" "),t("p",[e._v("在ERC721基础上扩展了元数据name , symbol 及 URI")]),e._v(" "),t("ul",[t("li",[t("h5",{attrs:{id:"erc721metadatamintable-sol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#erc721metadatamintable-sol"}},[e._v("#")]),e._v(" ERC721MetadataMintable.sol")])])]),e._v(" "),t("p",[e._v("在对ERC721Metadata的扩展,添加了铸币的支持，铸币时可以指定URI")]),e._v(" "),t("ul",[t("li",[t("h5",{attrs:{id:"erc721mintable-sol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#erc721mintable-sol"}},[e._v("#")]),e._v(" ERC721Mintable.sol")])])]),e._v(" "),t("p",[e._v("在ERC721基础上添加了铸币的支持")]),e._v(" "),t("ul",[t("li",[t("h5",{attrs:{id:"erc721pausable-sol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#erc721pausable-sol"}},[e._v("#")]),e._v(" ERC721Pausable.sol")])])]),e._v(" "),t("p",[e._v("在ERC721基础上引入了Pausable，可以冻结整个代币的流转")]),e._v(" "),t("ul",[t("li",[t("h5",{attrs:{id:"ierc721-sol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ierc721-sol"}},[e._v("#")]),e._v(" IERC721.sol")])])]),e._v(" "),t("p",[e._v("ERC721的实现接口")]),e._v(" "),t("ul",[t("li",[t("h5",{attrs:{id:"ierc721enumerable-sol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ierc721enumerable-sol"}},[e._v("#")]),e._v(" IERC721Enumerable.sol")])])]),e._v(" "),t("p",[e._v("ERC721Enumerable的实现接口")]),e._v(" "),t("ul",[t("li",[t("h5",{attrs:{id:"ierc721full-sol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ierc721full-sol"}},[e._v("#")]),e._v(" IERC721Full.sol")])])]),e._v(" "),t("p",[e._v("ERC721Full的实现接口")]),e._v(" "),t("ul",[t("li",[t("h5",{attrs:{id:"ierc721metadata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ierc721metadata"}},[e._v("#")]),e._v(" IERC721Metadata")])])]),e._v(" "),t("p",[e._v("ERC721Metadata的实现接口")]),e._v(" "),t("ul",[t("li",[e._v("IERC721Receiver")])]),e._v(" "),t("p",[e._v("TODO:觉得和ERC165相关，但是具体也是不太清楚")]),e._v(" "),t("h4",{attrs:{id:"erc721"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#erc721"}},[e._v("#")]),e._v(" ERC721")]),e._v(" "),t("h5",{attrs:{id:"全局变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局变量"}},[e._v("#")]),e._v(" 全局变量")]),e._v(" "),t("hr"),e._v(" "),t("ul",[t("li",[e._v("应该而ERC165相关，用于暴露接口")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("bytes4 private constant _ERC721_RECEIVED = 0x150b7a02;\nbytes4 private constant _InterfaceId_ERC721 = 0x80ac58cd;\n")])])]),t("ul",[t("li",[e._v("存储 token所有者")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  mapping (uint256 => address) private _tokenOwner\n")])])]),t("ul",[t("li",[e._v("对应tokenID的授权")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mapping (uint256 => address) private _tokenApprovals\n")])])]),t("ul",[t("li",[e._v("对应用户账户的授权")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mapping (address => mapping (address => bool)) private _operatorApprovals\n")])])]),t("ul",[t("li",[e._v("账户下token数量")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mapping (address => uint256) private _ownedTokensCount\n")])])]),t("h4",{attrs:{id:"事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[e._v("#")]),e._v(" 事件")]),e._v(" "),t("hr"),e._v(" "),t("ul",[t("li",[e._v("token交易事件")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("event Transfer(\n    address indexed from,\n    address indexed to,\n    uint256 indexed tokenId\n );\n")])])]),t("ul",[t("li",[e._v("token授权事件")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("event Approval(\n    address indexed owner,\n    address indexed approved,\n    uint256 indexed tokenId\n);\n")])])]),t("ul",[t("li",[e._v("账户下token授权")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  event ApprovalForAll(\n    address indexed owner,\n    address indexed operator,\n    bool approved\n );\n")])])]),t("h4",{attrs:{id:"方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[e._v("#")]),e._v(" 方法")]),e._v(" "),t("hr"),e._v(" "),t("ul",[t("li",[e._v("获取账户下token数量")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" function balanceOf(address owner) public view returns (uint256 balance);\n")])])]),t("ul",[t("li",[e._v("获取对应token拥有者地址")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" function ownerOf(uint256 tokenId) public view returns (address owner);\n")])])]),t("ul",[t("li",[e._v("对token进行授权")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function approve(address to, uint256 tokenId) public;\n")])])]),t("ul",[t("li",[e._v("获取获取token对应的被授权账户")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function getApproved(uint256 tokenId) public view returns (address operator);\n")])])]),t("ul",[t("li",[e._v("对账户进行授权")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" function setApprovalForAll(address operator, bool _approved) public;\n")])])]),t("ul",[t("li",[e._v("判断是否是账户的被授权者")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function isApprovedForAll(address owner, address operator) public view returns (bool);\n")])])]),t("ul",[t("li",[e._v("使用授权交易token")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function transferFrom(address from, address to, uint256 tokenId) public;\n")])])]),t("ul",[t("li",[e._v("使用安全授权交易token,不支持发送数据")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function safeTransferFrom(address from, address to, uint256 tokenId) public;\n")])])]),t("ul",[t("li",[e._v("使用安全授权交易token，支持发送数据")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function safeTransferFrom(\n    address from,\n    address to,\n    uint256 tokenId,\n    bytes data\n) public;\n")])])]),t("h4",{attrs:{id:"合约源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合约源码"}},[e._v("#")]),e._v(" 合约源码")]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("contract ERC721 is ERC165, IERC721 {\n\n  using SafeMath for uint256;\n  using Address for address;\n\n  // Equals to `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`\n  // which can be also obtained as `IERC721Receiver(0).onERC721Received.selector`\n  bytes4 private constant _ERC721_RECEIVED = 0x150b7a02;\n\n  // Mapping from token ID to owner\n  mapping (uint256 => address) private _tokenOwner;\n\n  // Mapping from token ID to approved address\n  mapping (uint256 => address) private _tokenApprovals;\n\n  // Mapping from owner to number of owned token\n  mapping (address => uint256) private _ownedTokensCount;\n\n  // Mapping from owner to operator approvals\n  mapping (address => mapping (address => bool)) private _operatorApprovals;\n\n  bytes4 private constant _InterfaceId_ERC721 = 0x80ac58cd;\n  /*\n   * 0x80ac58cd ===\n   *   bytes4(keccak256('balanceOf(address)')) ^\n   *   bytes4(keccak256('ownerOf(uint256)')) ^\n   *   bytes4(keccak256('approve(address,uint256)')) ^\n   *   bytes4(keccak256('getApproved(uint256)')) ^\n   *   bytes4(keccak256('setApprovalForAll(address,bool)')) ^\n   *   bytes4(keccak256('isApprovedForAll(address,address)')) ^\n   *   bytes4(keccak256('transferFrom(address,address,uint256)')) ^\n   *   bytes4(keccak256('safeTransferFrom(address,address,uint256)')) ^\n   *   bytes4(keccak256('safeTransferFrom(address,address,uint256,bytes)'))\n   */\n\n  constructor()\n    public\n  {\n    // register the supported interfaces to conform to ERC721 via ERC165\n    _registerInterface(_InterfaceId_ERC721);\n  }\n\n  /**\n   * @dev Gets the balance of the specified address\n   * @param owner address to query the balance of\n   * @return uint256 representing the amount owned by the passed address\n   */\n  function balanceOf(address owner) public view returns (uint256) {\n    require(owner != address(0));\n    return _ownedTokensCount[owner];\n  }\n\n  /**\n   * @dev Gets the owner of the specified token ID\n   * @param tokenId uint256 ID of the token to query the owner of\n   * @return owner address currently marked as the owner of the given token ID\n   */\n  function ownerOf(uint256 tokenId) public view returns (address) {\n    address owner = _tokenOwner[tokenId];\n    require(owner != address(0));\n    return owner;\n  }\n\n  /**\n   * @dev Approves another address to transfer the given token ID\n   * The zero address indicates there is no approved address.\n   * There can only be one approved address per token at a given time.\n   * Can only be called by the token owner or an approved operator.\n   * @param to address to be approved for the given token ID\n   * @param tokenId uint256 ID of the token to be approved\n   */\n  function approve(address to, uint256 tokenId) public {\n    address owner = ownerOf(tokenId);\n    require(to != owner);\n    require(msg.sender == owner || isApprovedForAll(owner, msg.sender));\n\n    _tokenApprovals[tokenId] = to;\n    emit Approval(owner, to, tokenId);\n  }\n\n  /**\n   * @dev Gets the approved address for a token ID, or zero if no address set\n   * Reverts if the token ID does not exist.\n   * @param tokenId uint256 ID of the token to query the approval of\n   * @return address currently approved for the given token ID\n   */\n  function getApproved(uint256 tokenId) public view returns (address) {\n    require(_exists(tokenId));\n    return _tokenApprovals[tokenId];\n  }\n\n  /**\n   * @dev Sets or unsets the approval of a given operator\n   * An operator is allowed to transfer all tokens of the sender on their behalf\n   * @param to operator address to set the approval\n   * @param approved representing the status of the approval to be set\n   */\n  function setApprovalForAll(address to, bool approved) public {\n    require(to != msg.sender);\n    _operatorApprovals[msg.sender][to] = approved;\n    emit ApprovalForAll(msg.sender, to, approved);\n  }\n\n  /**\n   * @dev Tells whether an operator is approved by a given owner\n   * @param owner owner address which you want to query the approval of\n   * @param operator operator address which you want to query the approval of\n   * @return bool whether the given operator is approved by the given owner\n   */\n  function isApprovedForAll(\n    address owner,\n    address operator\n  )\n    public\n    view\n    returns (bool)\n  {\n    return _operatorApprovals[owner][operator];\n  }\n\n  /**\n   * @dev Transfers the ownership of a given token ID to another address\n   * Usage of this method is discouraged, use `safeTransferFrom` whenever possible\n   * Requires the msg sender to be the owner, approved, or operator\n   * @param from current owner of the token\n   * @param to address to receive the ownership of the given token ID\n   * @param tokenId uint256 ID of the token to be transferred\n  */\n  function transferFrom(\n    address from,\n    address to,\n    uint256 tokenId\n  )\n    public\n  {\n    require(_isApprovedOrOwner(msg.sender, tokenId));\n    require(to != address(0));\n\n    _clearApproval(from, tokenId);\n    _removeTokenFrom(from, tokenId);\n    _addTokenTo(to, tokenId);\n\n    emit Transfer(from, to, tokenId);\n  }\n\n  /**\n   * @dev Safely transfers the ownership of a given token ID to another address\n   * If the target address is a contract, it must implement `onERC721Received`,\n   * which is called upon a safe transfer, and return the magic value\n   * `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise,\n   * the transfer is reverted.\n   *\n   * Requires the msg sender to be the owner, approved, or operator\n   * @param from current owner of the token\n   * @param to address to receive the ownership of the given token ID\n   * @param tokenId uint256 ID of the token to be transferred\n  */\n  function safeTransferFrom(\n    address from,\n    address to,\n    uint256 tokenId\n  )\n    public\n  {\n    // solium-disable-next-line arg-overflow\n    safeTransferFrom(from, to, tokenId, \"\");\n  }\n\n  /**\n   * @dev Safely transfers the ownership of a given token ID to another address\n   * If the target address is a contract, it must implement `onERC721Received`,\n   * which is called upon a safe transfer, and return the magic value\n   * `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise,\n   * the transfer is reverted.\n   * Requires the msg sender to be the owner, approved, or operator\n   * @param from current owner of the token\n   * @param to address to receive the ownership of the given token ID\n   * @param tokenId uint256 ID of the token to be transferred\n   * @param _data bytes data to send along with a safe transfer check\n   */\n  function safeTransferFrom(\n    address from,\n    address to,\n    uint256 tokenId,\n    bytes _data\n  )\n    public\n  {\n    transferFrom(from, to, tokenId);\n    // solium-disable-next-line arg-overflow\n    require(_checkOnERC721Received(from, to, tokenId, _data));\n  }\n\n  /**\n   * @dev Returns whether the specified token exists\n   * @param tokenId uint256 ID of the token to query the existence of\n   * @return whether the token exists\n   */\n  function _exists(uint256 tokenId) internal view returns (bool) {\n    address owner = _tokenOwner[tokenId];\n    return owner != address(0);\n  }\n\n  /**\n   * @dev Returns whether the given spender can transfer a given token ID\n   * @param spender address of the spender to query\n   * @param tokenId uint256 ID of the token to be transferred\n   * @return bool whether the msg.sender is approved for the given token ID,\n   *  is an operator of the owner, or is the owner of the token\n   */\n  function _isApprovedOrOwner(\n    address spender,\n    uint256 tokenId\n  )\n    internal\n    view\n    returns (bool)\n  {\n    address owner = ownerOf(tokenId);\n    // Disable solium check because of\n    // https://github.com/duaraghav8/Solium/issues/175\n    // solium-disable-next-line operator-whitespace\n    return (\n      spender == owner ||\n      getApproved(tokenId) == spender ||\n      isApprovedForAll(owner, spender)\n    );\n  }\n\n  /**\n   * @dev Internal function to mint a new token\n   * Reverts if the given token ID already exists\n   * @param to The address that will own the minted token\n   * @param tokenId uint256 ID of the token to be minted by the msg.sender\n   */\n  function _mint(address to, uint256 tokenId) internal {\n    require(to != address(0));\n    _addTokenTo(to, tokenId);\n    emit Transfer(address(0), to, tokenId);\n  }\n\n  /**\n   * @dev Internal function to burn a specific token\n   * Reverts if the token does not exist\n   * @param tokenId uint256 ID of the token being burned by the msg.sender\n   */\n  function _burn(address owner, uint256 tokenId) internal {\n    _clearApproval(owner, tokenId);\n    _removeTokenFrom(owner, tokenId);\n    emit Transfer(owner, address(0), tokenId);\n  }\n\n  /**\n   * @dev Internal function to add a token ID to the list of a given address\n   * Note that this function is left internal to make ERC721Enumerable possible, but is not\n   * intended to be called by custom derived contracts: in particular, it emits no Transfer event.\n   * @param to address representing the new owner of the given token ID\n   * @param tokenId uint256 ID of the token to be added to the tokens list of the given address\n   */\n  function _addTokenTo(address to, uint256 tokenId) internal {\n    require(_tokenOwner[tokenId] == address(0));\n    _tokenOwner[tokenId] = to;\n    _ownedTokensCount[to] = _ownedTokensCount[to].add(1);\n  }\n\n  /**\n   * @dev Internal function to remove a token ID from the list of a given address\n   * Note that this function is left internal to make ERC721Enumerable possible, but is not\n   * intended to be called by custom derived contracts: in particular, it emits no Transfer event,\n   * and doesn't clear approvals.\n   * @param from address representing the previous owner of the given token ID\n   * @param tokenId uint256 ID of the token to be removed from the tokens list of the given address\n   */\n  function _removeTokenFrom(address from, uint256 tokenId) internal {\n    require(ownerOf(tokenId) == from);\n    _ownedTokensCount[from] = _ownedTokensCount[from].sub(1);\n    _tokenOwner[tokenId] = address(0);\n  }\n\n  /**\n   * @dev Internal function to invoke `onERC721Received` on a target address\n   * The call is not executed if the target address is not a contract\n   * @param from address representing the previous owner of the given token ID\n   * @param to target address that will receive the tokens\n   * @param tokenId uint256 ID of the token to be transferred\n   * @param _data bytes optional data to send along with the call\n   * @return whether the call correctly returned the expected magic value\n   */\n  function _checkOnERC721Received(\n    address from,\n    address to,\n    uint256 tokenId,\n    bytes _data\n  )\n    internal\n    returns (bool)\n  {\n    if (!to.isContract()) {\n      return true;\n    }\n    bytes4 retval = IERC721Receiver(to).onERC721Received(\n      msg.sender, from, tokenId, _data);\n    return (retval == _ERC721_RECEIVED);\n  }\n\n  /**\n   * @dev Private function to clear current approval of a given token ID\n   * Reverts if the given address is not indeed the owner of the token\n   * @param owner owner of the token\n   * @param tokenId uint256 ID of the token to be transferred\n   */\n  function _clearApproval(address owner, uint256 tokenId) private {\n    require(ownerOf(tokenId) == owner);\n    if (_tokenApprovals[tokenId] != address(0)) {\n      _tokenApprovals[tokenId] = address(0);\n    }\n  }\n}\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);