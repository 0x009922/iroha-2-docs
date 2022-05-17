import{_ as d,o as i,c as o,a as e,e as n,d as t,b as s}from"./app.0f261f37.js";const c={},u={class:"warning custom-block"},h=e("p",{class:"custom-block-title"}," WARNING ",-1),p=e("p",null,"This query returns a large volume of data.",-1),g=[h,p];function y(l,r){return i(),o("div",u,g)}var a=d(c,[["render",y]]);const f=t(`<h1 id="queries" tabindex="-1">Queries <a class="header-anchor" href="#queries" aria-hidden="true">#</a></h1><p>Although much of the information about the state of the blockchain can be obtained, as we&#39;ve shown before, using an event subscriber and using a filter to narrow the scope of the events to those of interest, sometimes, one needs to take a more direct approach. Enter queries. They are small instruction-like objects that, when sent to an Iroha peer, prompt a response with details from the current world state view.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>As of writing, most queries can not be filtered, but can be paginated. As such, some queries, which we&#39;ll mark with a warning sign, should be used with care, and you should think carefully about the pagination scheme.</p></div><p>In the following section we shall try to mirror the module structure of the queries and present to you what they do.</p><p>Before we proceed we should discuss a few conventions. We use the expressions <em>gets</em>, <em>returns</em>, <em>searches</em> with a precise meaning in the following (somewhat encyclop\xE6dic) section.</p><ul><li><em>gets</em>, means that the query already has the data readily available and the data is trivial. Use these queries at will;</li><li><em>returns</em>, means that the query has the data readily available, just as with <em>gets</em>, but by contrast the data is not trivial. You can still use these queries, but be mindful of the performance impact;</li><li><em>searches</em>, differs from the above two. Data must be actively collected and neither the return type, nor the collection process is cheap. Use with great care.</li></ul><p>Another convention that we follow is that the queries are provided with just one data type as input, and parameterised by the type of the output. We should take some time to explain how to interpret the data.</p><h2 id="how-to-read-findzbyxandy-queries" tabindex="-1">How to read <code>FindZByXAndY</code> queries <a class="header-anchor" href="#how-to-read-findzbyxandy-queries" aria-hidden="true">#</a></h2><p>The queries will have a <strong>Parameters</strong> and a <strong>Returns</strong> section. The parameters can either be single or multiple types, while the output is almost always either one type, or a <code>Vec&lt;Type&gt;</code> kind of construction.</p><p>When we say</p><blockquote><ul><li><strong>Parameters</strong>: <code>(X, Y)</code></li></ul></blockquote><p>we mean that in Rust source code you need to construct the query as follows:</p><div class="language-rust"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> query </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#953800;">FindZByXAndY</span><span style="color:#CF222E;">::</span><span style="color:#8250DF;">new</span><span style="color:#24292F;">(x</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">X</span><span style="color:#24292F;">, y</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">Y</span><span style="color:#24292F;">);</span></span>
<span class="line"></span></code></pre></div><p>where <code>x</code> is a variable of type <code>X</code>, and <code>y</code> \u2014 <code>Y</code> respectively. We&#39;ll provide you with information about each type, otherwise, refer to the guide for each programming language for more information.</p><p>When we say, &quot;Returns: Vec&quot;, we mean that the return value is a collection of more than one element of that type. Depending on the SDK implementation this can be a type native to the language (e.g. JavaScript) or a thin wrapper around the Rust Vec structure.</p><h2 id="pagination" tabindex="-1">Pagination <a class="header-anchor" href="#pagination" aria-hidden="true">#</a></h2><p>Submitting queries is done slightly differently in Rust. One can use <code>client.request(query)</code> to submit a query and get the full result in one go, both if you have a <code>Vec&lt;Z&gt;</code> and just <code>Z</code> as the return type.</p><p>However some queries (particularly with &quot;All&quot; in their name) can return exorbitant amounts of data. As such, one should consider pagination to reduce the load on the system.</p><p>To construct a <code>Pagination</code> all one needs to do is to call <code>client.request_with_pagination(query, pagination)</code>, where the <code>pagination</code> is constructed as follows:</p><div class="language-rust"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> starting_result</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">u32</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> _;</span></span>
<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> limit</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">u32</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> _;</span></span>
<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> pagination </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#953800;">Pagination</span><span style="color:#CF222E;">::</span><span style="color:#8250DF;">new</span><span style="color:#24292F;">(</span><span style="color:#953800;">Some</span><span style="color:#24292F;">(starting_result), </span><span style="color:#953800;">Some</span><span style="color:#24292F;">(limit));</span></span>
<span class="line"></span></code></pre></div><h2 id="roles" tabindex="-1">Roles <a class="header-anchor" href="#roles" aria-hidden="true">#</a></h2><p>Roles are an optional feature that should be present on all Iroha 2 deployments by default, when they&#39;re compiled in the private blockchain configuration.</p><h3 id="findallroles" tabindex="-1">FindAllRoles <a class="header-anchor" href="#findallroles" aria-hidden="true">#</a></h3>`,23),m=e("li",null,[e("p",null,[e("strong",null,"Returns"),s(": "),e("code",null,"Vec<Roles>")])],-1),b=e("p",null,[e("strong",null,"Details"),s(": It returns all roles registered as "),e("em",null,"global"),s(" (as opposed to domain-scoped) in the blockchain.")],-1),_=t('<h3 id="findallroleids" tabindex="-1">FindAllRoleIds <a class="header-anchor" href="#findallroleids" aria-hidden="true">#</a></h3><ul><li><p><strong>Returns</strong>: <code>Vec&lt;Roles&gt;</code></p></li><li><p><strong>Details</strong>: It returns all roles registered as <em>global</em> (as opposed to domain-scoped) in the blockchain, but instead of returning the values of Roles (which contain permission tokens), we only get the Ids of the roles.</p></li></ul><h3 id="findrolebyroleid" tabindex="-1">FindRoleByRoleId <a class="header-anchor" href="#findrolebyroleid" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>RoleId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Roles&gt;</code></p></li><li><p><strong>Details</strong>: It returns the role that has the provided role ID. For example, given the name of the role <code>admin</code> it will return all of the <code>admin</code>-level permission tokens.</p></li></ul><h3 id="findrolesbyaccountid" tabindex="-1">FindRolesByAccountId <a class="header-anchor" href="#findrolesbyaccountid" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>AccountId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;RoleId&gt;</code></p></li><li><p><strong>Details</strong>: This query returns all of the role identifiers that are attached to the given account. Note, that unlike <a href="#findallroles">the previous query</a>, we do not return the roles themselves.</p></li></ul><h2 id="permissions" tabindex="-1">Permissions <a class="header-anchor" href="#permissions" aria-hidden="true">#</a></h2><p>A semi-optional feature that depends on whether or not you want Iroha to manage a Public or Private Blockchain. Specifically, in both cases you have permissions, but in the public blockchain use-case, most accounts have the same common-sense permissions. By contrast in a private blockchain, most accounts are assumed not to be able to do anything outside of their own account or domain unless explicitly granted said permission.</p><h3 id="findpermissiontokensbyaccountid" tabindex="-1">FindPermissionTokensByAccountId <a class="header-anchor" href="#findpermissiontokensbyaccountid" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>AccountId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;PermissionToken&gt;</code></p></li><li><p><strong>Details</strong>: This query returns all of the permission tokens granted to the specified account.</p></li></ul><h2 id="account" tabindex="-1">Account <a class="header-anchor" href="#account" aria-hidden="true">#</a></h2><p>Most queries in Iroha pertain to accounts, and at the moment this is the most diverse set of queries.</p><h3 id="findallaccounts" tabindex="-1">FindAllAccounts <a class="header-anchor" href="#findallaccounts" aria-hidden="true">#</a></h3>',13),v=e("li",null,[e("p",null,[e("strong",null,"Returns"),s(": "),e("code",null,"Vec<Account>")])],-1),A=e("p",null,[e("strong",null,"Details"),s(": This query finds all accounts registered globally.")],-1),F=t('<h3 id="findaccountbyid" tabindex="-1">FindAccountById <a class="header-anchor" href="#findaccountbyid" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>AccountId</code></p></li><li><p><strong>Returns</strong>: <code>Account</code></p></li><li><p><strong>Details</strong>: Returns the full account information corresponding to the given <code>AccountId</code>.</p></li></ul><h3 id="findaccountkeyvaluebyidandkey" tabindex="-1">FindAccountKeyValueByIdAndKey <a class="header-anchor" href="#findaccountkeyvaluebyidandkey" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>(AccountId, Name)</code></p></li><li><p><strong>Returns</strong>: <code>Value</code></p></li><li><p><strong>Details</strong>: This queries the <code>metadata</code> attached to the given account. Specifically it returns the value keyed by the provided <code>Name</code>.</p></li></ul><h3 id="findaccountsbyname" tabindex="-1">FindAccountsByName <a class="header-anchor" href="#findaccountsbyname" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>Name</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Account&gt;</code></p></li><li><p><strong>Details</strong>: This query returns all the accounts which have the given <code>Name</code>. This is particularly useful if you remember the name of the account, but do not, for example, recall the domain name in which it was registered.</p></li></ul><h3 id="findaccountsbydomainid" tabindex="-1">FindAccountsByDomainId <a class="header-anchor" href="#findaccountsbydomainid" aria-hidden="true">#</a></h3>',7),T=e("li",null,[e("p",null,[e("strong",null,"Parameters"),s(": "),e("code",null,"DomainId")])],-1),I=e("li",null,[e("p",null,[e("strong",null,"Returns"),s(": "),e("code",null,"Vec<Account>")])],-1),k=e("p",null,[e("strong",null,"Details"),s(": Find all of the accounts that belong to a specific domain. Note that this returns the full accounts and not the "),e("code",null,"AccountId"),s(" collection.")],-1),w=t('<h3 id="findaccountswithasset" tabindex="-1">FindAccountsWithAsset <a class="header-anchor" href="#findaccountswithasset" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>AccountId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Account&gt;</code></p></li><li><p><strong>Details</strong>: Find all of the accounts that have the given asset.</p></li></ul><h2 id="asset" tabindex="-1">Asset <a class="header-anchor" href="#asset" aria-hidden="true">#</a></h2><p>Assets include simple numbers, but also a special type of key-to-value map, that is used as a secure data storage for privileged information.</p><h3 id="findallassets" tabindex="-1">FindAllAssets <a class="header-anchor" href="#findallassets" aria-hidden="true">#</a></h3>',5),D=e("li",null,[e("p",null,[e("strong",null,"Returns"),s(": "),e("code",null,"Vec<Asset>")])],-1),R=e("p",null,[e("strong",null,"Details"),s(": Returns all of the known assets by value.")],-1),q=e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"INFO"),e("p",null,[s("You should note that this is not the same as "),e("code",null,"AssetDefinition"),s(". If you have one asset called e.g. "),e("code",null,"tea#wonderland"),s(" that belongs to every account on the blockchain, you will receive the aggregated value across all accounts, but not the information such as the type of the asset.")])],-1),P=e("h3",{id:"findallassetdefinitions",tabindex:"-1"},[s("FindAllAssetDefinitions "),e("a",{class:"header-anchor",href:"#findallassetdefinitions","aria-hidden":"true"},"#")],-1),x=e("li",null,[e("p",null,[e("strong",null,"Returns"),s(": "),e("code",null,"Vec<AssetDefinition>")])],-1),V=e("p",null,[e("strong",null,"Details"),s(": This query returns all known asset definitions by value.")],-1),B=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,"To reduce the load on the network, we store the definition of an asset separate from its instances. So if you want to know if an asset is mintable, or the type stored in the asset you need to query the asset definition, rather than the asset itself.")],-1),C=t('<h3 id="findassetbyid" tabindex="-1">FindAssetById <a class="header-anchor" href="#findassetbyid" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>AssetId</code></p></li><li><p><strong>Returns</strong>: <code>Asset</code></p></li><li><p><strong>Details</strong>: This query returns the aggregated data about an asset&#39;s use across the network.</p></li></ul><h3 id="findassetsbyname" tabindex="-1">FindAssetsByName <a class="header-anchor" href="#findassetsbyname" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>Name</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Asset&gt;</code></p></li><li><p><strong>Details</strong>: This query searches the network for all assets that match the given name.</p></li></ul><h3 id="findassetsbyaccountid" tabindex="-1">FindAssetsByAccountId <a class="header-anchor" href="#findassetsbyaccountid" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>AccountId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Asset&gt;</code></p></li><li><p><strong>Details</strong>: This query returns all of the assets that belong to a single account.</p></li></ul><h3 id="findassetsbyassetdefinitionid" tabindex="-1">FindAssetsByAssetDefinitionId <a class="header-anchor" href="#findassetsbyassetdefinitionid" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>AssetDefinitionId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Asset&gt;</code></p></li><li><p><strong>Details</strong>: This query will search for all of the assets that have the given definition Id.</p></li></ul>',8),S=t('<h3 id="findassetsbydomainid" tabindex="-1">FindAssetsByDomainId <a class="header-anchor" href="#findassetsbydomainid" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>DomainId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Asset&gt;</code></p></li><li><p><strong>Details</strong>: This query returns all assets that are registered in the current domain.</p></li></ul>',2),E=t('<h3 id="findassetsbydomainidandassetdefinitionid" tabindex="-1">FindAssetsByDomainIdAndAssetDefinitionId <a class="header-anchor" href="#findassetsbydomainidandassetdefinitionid" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>(DomainId, AssetDefinitionId)</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Asset&gt;</code></p></li><li><p><strong>Details</strong>: This query searches the domain for assets that have the given definition id.</p></li></ul><h3 id="findassetquantitybyid" tabindex="-1">FindAssetQuantityById <a class="header-anchor" href="#findassetquantitybyid" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>AssetId</code></p></li><li><p><strong>Returns</strong>: <code>u32</code></p></li><li><p><strong>Details</strong>: This query assumes that the asset given by the identifier is of type <code>AssetValue::Quantity</code>, and returns the contained <code>u32</code>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This query can fail.</p></div></li></ul><h3 id="findassetkeyvaluebyidandkey" tabindex="-1">FindAssetKeyValueByIdAndKey <a class="header-anchor" href="#findassetkeyvaluebyidandkey" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>(AssetId, Name)</code></p></li><li><p><strong>Returns</strong>: <code>Value</code></p></li><li><p><strong>Details</strong>: This query gets the value keyed by the given name in the metadata of the asset corresponding to the given identifier.</p></li></ul><h3 id="findassetdefinitionkeyvaluebyidandkey" tabindex="-1">FindAssetDefinitionKeyValueByIdAndKey <a class="header-anchor" href="#findassetdefinitionkeyvaluebyidandkey" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>(AssetDefinitionId, Name)</code></p></li><li><p><strong>Returns</strong>: <code>Value</code></p></li><li><p><strong>Details</strong>: This query gets the value keyed by the given name in the metadata of the asset definition corresponding to the given identifier.</p></li></ul><h2 id="domain" tabindex="-1">Domain <a class="header-anchor" href="#domain" aria-hidden="true">#</a></h2><p>The domain is the basic unit of organisation in an Iroha blockchain. Accounts and assets must be registered inside a domain, triggers are usually scoped by domain, and most queries have the domain as a possible input.</p><h3 id="findalldomains" tabindex="-1">FindAllDomains <a class="header-anchor" href="#findalldomains" aria-hidden="true">#</a></h3><ul><li><p><strong>Returns</strong>: <code>Vec&lt;Domain&gt;</code></p></li><li><p><strong>Details</strong>: This query returns all of the known registered domains.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This query returns the full contents of the world state view as of execution. This query should be used sparingly and for debugging purposes only.</p></div></li></ul><h3 id="finddomainbyid" tabindex="-1">FindDomainById <a class="header-anchor" href="#finddomainbyid" aria-hidden="true">#</a></h3>',13),N=e("li",null,[e("p",null,[e("strong",null,"Parameters"),s(": "),e("code",null,"DomainId")])],-1),K=e("li",null,[e("p",null,[e("strong",null,"Returns"),s(": "),e("code",null,"Domain")])],-1),W=e("p",null,[e("strong",null,"Details"),s(": This query gets the domain corresponding to the given identifier.")],-1),j=t(`<h3 id="finddomainkeyvaluebyidandkey" tabindex="-1">FindDomainKeyValueByIdAndKey <a class="header-anchor" href="#finddomainkeyvaluebyidandkey" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>(DomainId, Name)</code></p></li><li><p><strong>Returns</strong>: <code>Value</code></p></li><li><p><strong>Details</strong>: This query returns the value keyed by the given name in the domain corresponding to the given identifier.</p></li></ul><h2 id="peer" tabindex="-1">Peer <a class="header-anchor" href="#peer" aria-hidden="true">#</a></h2><p>A peer is the basic unit of storage and validation. In common parlance we may conflate the node and the peer binary running on the node, but in this case we specifically mean the peer binary as a server with its specific configuration.</p><h3 id="findallpeers" tabindex="-1">FindAllPeers <a class="header-anchor" href="#findallpeers" aria-hidden="true">#</a></h3><ul><li><p><strong>Returns</strong>: <code>Vec&lt;Peer&gt;</code></p></li><li><p><strong>Details</strong>: This query returns all known peers identified by their key, and accompanied by the address of the API endpoint of each.</p></li></ul><h3 id="findallparameters" tabindex="-1">FindAllParameters <a class="header-anchor" href="#findallparameters" aria-hidden="true">#</a></h3><ul><li><p><strong>Returns</strong>: <code>Vec&lt;Parameter&gt;</code></p><p>Returns the parameters used by all peers in the network. Useful to debug if any of the peers are incorrectly configured and causing view changes.</p><div class="language-rust"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">pub</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">enum</span><span style="color:#24292F;"> </span><span style="color:#953800;">Parameter</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#6E7781;">    /// Maximum amount of Faulty Peers in the system.</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">MaximumFaultyPeersAmount</span><span style="color:#24292F;">(</span><span style="color:#953800;">u32</span><span style="color:#24292F;">),</span></span>
<span class="line"><span style="color:#6E7781;">    /// Maximum time for a leader to create a block.</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">BlockTime</span><span style="color:#24292F;">(</span><span style="color:#953800;">u128</span><span style="color:#24292F;">),</span></span>
<span class="line"><span style="color:#6E7781;">    /// Maximum time for a proxy tail to send commit message.</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">CommitTime</span><span style="color:#24292F;">(</span><span style="color:#953800;">u128</span><span style="color:#24292F;">),</span></span>
<span class="line"><span style="color:#6E7781;">    /// Time to wait for a transaction Receipt.</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">TransactionReceiptTime</span><span style="color:#24292F;">(</span><span style="color:#953800;">u128</span><span style="color:#24292F;">),</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="transaction" tabindex="-1">Transaction <a class="header-anchor" href="#transaction" aria-hidden="true">#</a></h2><p>It is often necessary to query the state of specific transactions, especially for use in blockchain explorers, and for user-facing applications.</p><h3 id="findtransactionsbyaccountid" tabindex="-1">FindTransactionsByAccountId <a class="header-anchor" href="#findtransactionsbyaccountid" aria-hidden="true">#</a></h3>`,11),Y=t(`<li><p><strong>Parameters</strong>: <code>AccountId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;TransactionValue&gt;</code></p><div class="language-rust"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">pub</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">enum</span><span style="color:#24292F;"> </span><span style="color:#953800;">TransactionValue</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#6E7781;">    /// Committed transaction</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">Transaction</span><span style="color:#24292F;">(</span><span style="color:#953800;">Box</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">VersionedTransaction</span><span style="color:#24292F;">&gt;),</span></span>
<span class="line"><span style="color:#6E7781;">    /// Rejected transaction with reason of rejection</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">RejectedTransaction</span><span style="color:#24292F;">(</span><span style="color:#953800;">Box</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">VersionedRejectedTransaction</span><span style="color:#24292F;">&gt;),</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre></div></li>`,2),H=e("p",null,[e("strong",null,"Details"),s(": This query is used to get the full set of transactions that an account has submitted throughout the existence of the blockchain.")],-1),Q=t('<h3 id="findtransactionbyhash" tabindex="-1">FindTransactionByHash <a class="header-anchor" href="#findtransactionbyhash" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>Hash</code></p></li><li><p><strong>Returns</strong>: <code>TransactionValue</code></p></li><li><p><strong>Details</strong>: This query finds the transaction by hash.</p></li></ul><h2 id="triggers" tabindex="-1">Triggers <a class="header-anchor" href="#triggers" aria-hidden="true">#</a></h2><p>Iroha is an event-driven architecture. Every modification of the world state emits a corresponding event that can be captured by appropriate event listeners called filters.</p><p>An action that executes whenever an event meeting certain conditions is emitted is called a <code>trigger</code>. The following queries are going to be invaluable for anyone writing (and debugging) smart contracts submitted into an Iroha-based blockchain.</p><h3 id="findallactivetriggerids" tabindex="-1">FindAllActiveTriggerIds <a class="header-anchor" href="#findallactivetriggerids" aria-hidden="true">#</a></h3><ul><li><p><strong>Returns</strong>: <code>Vec&lt;TriggerId&gt;</code></p></li><li><p><strong>Details</strong>: This query finds all currently active triggers, that is, triggers that have not expired at the time of the query.</p></li></ul>',7),X=t('<h3 id="findtriggerbyid" tabindex="-1">FindTriggerById <a class="header-anchor" href="#findtriggerbyid" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>TriggerId</code></p></li><li><p><strong>Returns</strong>: <code>Trigger</code></p></li><li><p><strong>Details</strong>: This query finds the trigger with the given ID.</p></li></ul><h3 id="findtriggerkeyvaluebyidandkey" tabindex="-1">FindTriggerKeyValueByIdAndKey <a class="header-anchor" href="#findtriggerkeyvaluebyidandkey" aria-hidden="true">#</a></h3><ul><li><p><strong>Parameters</strong>: <code>(TriggerId, Name)</code></p></li><li><p><strong>Returns</strong>: <code>Trigger</code></p></li><li><p><strong>Details</strong>: This query finds the value corresponding to the key in the metadata of the trigger with the given ID.</p></li></ul>',4),U='{"title":"Queries","description":"","frontmatter":{},"headers":[{"level":2,"title":"How to read FindZByXAndY queries","slug":"how-to-read-findzbyxandy-queries"},{"level":2,"title":"Pagination","slug":"pagination"},{"level":2,"title":"Roles","slug":"roles"},{"level":3,"title":"FindAllRoles","slug":"findallroles"},{"level":3,"title":"FindAllRoleIds","slug":"findallroleids"},{"level":3,"title":"FindRoleByRoleId","slug":"findrolebyroleid"},{"level":3,"title":"FindRolesByAccountId","slug":"findrolesbyaccountid"},{"level":2,"title":"Permissions","slug":"permissions"},{"level":3,"title":"FindPermissionTokensByAccountId","slug":"findpermissiontokensbyaccountid"},{"level":2,"title":"Account","slug":"account"},{"level":3,"title":"FindAllAccounts","slug":"findallaccounts"},{"level":3,"title":"FindAccountById","slug":"findaccountbyid"},{"level":3,"title":"FindAccountKeyValueByIdAndKey","slug":"findaccountkeyvaluebyidandkey"},{"level":3,"title":"FindAccountsByName","slug":"findaccountsbyname"},{"level":3,"title":"FindAccountsByDomainId","slug":"findaccountsbydomainid"},{"level":3,"title":"FindAccountsWithAsset","slug":"findaccountswithasset"},{"level":2,"title":"Asset","slug":"asset"},{"level":3,"title":"FindAllAssets","slug":"findallassets"},{"level":3,"title":"FindAllAssetDefinitions","slug":"findallassetdefinitions"},{"level":3,"title":"FindAssetById","slug":"findassetbyid"},{"level":3,"title":"FindAssetsByName","slug":"findassetsbyname"},{"level":3,"title":"FindAssetsByAccountId","slug":"findassetsbyaccountid"},{"level":3,"title":"FindAssetsByAssetDefinitionId","slug":"findassetsbyassetdefinitionid"},{"level":3,"title":"FindAssetsByDomainId","slug":"findassetsbydomainid"},{"level":3,"title":"FindAssetsByDomainIdAndAssetDefinitionId","slug":"findassetsbydomainidandassetdefinitionid"},{"level":3,"title":"FindAssetQuantityById","slug":"findassetquantitybyid"},{"level":3,"title":"FindAssetKeyValueByIdAndKey","slug":"findassetkeyvaluebyidandkey"},{"level":3,"title":"FindAssetDefinitionKeyValueByIdAndKey","slug":"findassetdefinitionkeyvaluebyidandkey"},{"level":2,"title":"Domain","slug":"domain"},{"level":3,"title":"FindAllDomains","slug":"findalldomains"},{"level":3,"title":"FindDomainById","slug":"finddomainbyid"},{"level":3,"title":"FindDomainKeyValueByIdAndKey","slug":"finddomainkeyvaluebyidandkey"},{"level":2,"title":"Peer","slug":"peer"},{"level":3,"title":"FindAllPeers","slug":"findallpeers"},{"level":3,"title":"FindAllParameters","slug":"findallparameters"},{"level":2,"title":"Transaction","slug":"transaction"},{"level":3,"title":"FindTransactionsByAccountId","slug":"findtransactionsbyaccountid"},{"level":3,"title":"FindTransactionByHash","slug":"findtransactionbyhash"},{"level":2,"title":"Triggers","slug":"triggers"},{"level":3,"title":"FindAllActiveTriggerIds","slug":"findallactivetriggerids"},{"level":3,"title":"FindTriggerById","slug":"findtriggerbyid"},{"level":3,"title":"FindTriggerKeyValueByIdAndKey","slug":"findtriggerkeyvaluebyidandkey"}],"relativePath":"guide/advanced/queries.md","lastUpdated":1652804524000}',M={},z=Object.assign(M,{setup(l){return(r,Z)=>(i(),o("div",null,[f,e("ul",null,[m,e("li",null,[b,n(a)])]),_,e("ul",null,[v,e("li",null,[A,n(a)])]),F,e("ul",null,[T,I,e("li",null,[k,n(a)])]),w,e("ul",null,[D,e("li",null,[R,n(a),q])]),P,e("ul",null,[x,e("li",null,[V,n(a),B])]),C,n(a),S,n(a),E,e("ul",null,[N,K,e("li",null,[W,n(a)])]),j,e("ul",null,[Y,e("li",null,[H,n(a)])]),Q,n(a),X]))}});export{U as __pageData,z as default};
