import{_ as s,c as e,o as a,d as o}from"./app.0f261f37.js";var t="/iroha-2-docs/assets/install-troubles.36e7cc47.png",n="/iroha-2-docs/assets/install-cli.f85eb29c.png";const b='{"title":"Build and Install Iroha 2","description":"","frontmatter":{},"headers":[{"level":2,"title":"Install the Rust Toolchain","slug":"install-the-rust-toolchain"},{"level":2,"title":"Troubleshooting: Rust toolchain","slug":"troubleshooting-rust-toolchain"},{"level":2,"title":"Install Iroha from GitHub","slug":"install-iroha-from-github"},{"level":3,"title":"Bring up a minimal network","slug":"bring-up-a-minimal-network"}],"relativePath":"guide/build-and-install.md","lastUpdated":1652804524000}',l={},i=o(`<h1 id="build-and-install-iroha-2" tabindex="-1">Build and Install Iroha 2 <a class="header-anchor" href="#build-and-install-iroha-2" aria-hidden="true">#</a></h1><h2 id="install-the-rust-toolchain" tabindex="-1">Install the Rust Toolchain <a class="header-anchor" href="#install-the-rust-toolchain" aria-hidden="true">#</a></h2><p>This is normally a straightforward process. This is not always true, so we&#39;ve added some details for troubleshooting at each stage.</p><p>The easiest way to get the official <code>rustup</code> script is to</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">curl --proto </span><span style="color:#0A3069;">&#39;=https&#39;</span><span style="color:#24292F;"> --tlsv1.2 -sSf https://sh.rustup.rs </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> sh</span></span>
<span class="line"></span></code></pre></div><p>or to install <code>rustup</code> via your distribution\u2019s package manager.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you know what you&#39;re doing, you can also install the rust toolchain directly, without <code>rustup</code>.</p></div><p>If you go with the one-line <code>curl</code> script, you will be guided through the setup process. Just go with the defaults.</p><h2 id="troubleshooting-rust-toolchain" tabindex="-1">Troubleshooting: Rust toolchain <a class="header-anchor" href="#troubleshooting-rust-toolchain" aria-hidden="true">#</a></h2><p>Sometimes, things don&#39;t go to plan. Especially if you had <code>rust</code> on your system a while ago, but didn&#39;t upgrade. A similar problem can occur in Python: XKCD has a famous example of what that might look like.</p><div class="flex justify-center"><p><img src="`+t+`" alt=""></p></div><p>In the interest of preserving both your and our sanity, make sure that you have the right version of <code>cargo</code> paired with the right version of <code>rustc</code> (1.57 and 1.57) respectively. To show the versions, do</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">cargo -V</span></span>
<span class="line"><span style="color:#24292F;">cargo 1.57.0 (b2e52d7ca 2021-10-21)</span></span>
<span class="line"></span></code></pre></div><p>and then</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">rustc --version</span></span>
<span class="line"><span style="color:#24292F;">rustc 1.57.0 (f1edd0429 2021-11-29)</span></span>
<span class="line"></span></code></pre></div><p>If you have higher versions, you&#39;re fine. If you have lower versions, you can run</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">rustup toolchain update stable</span></span>
<span class="line"></span></code></pre></div><p>to update.</p><p>If you get lower version numbers <strong>and</strong> you updated the toolchain and it didn&#39;t work\u2026 let&#39;s just say it&#39;s a common problem, but it doesn&#39;t have a common solution.</p><p>Firstly, you should establish where the version that you want to use is installed.</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">rustup which rustc</span></span>
<span class="line"><span style="color:#24292F;">rustup which cargo</span></span>
<span class="line"></span></code></pre></div><p>should give you some idea. As a rule of thumb, the user installations of the toolchains are in <code>~/.rustup/toolchains/stable-*/bin/</code>. If that is the case, you should be able to run</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">rustup toolchain update stable</span></span>
<span class="line"></span></code></pre></div><p>and that should fix your problems. But, if you&#39;re reading this, it&#39;s reasonable to assume that it didn&#39;t.</p><p>Another option is that you have the up-to-date <code>stable</code> toolchain, but it&#39;s not set as the default.</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">rustup default stable</span></span>
<span class="line"></span></code></pre></div><p>this can happen if you installed a <code>nightly</code> version or set a specific Rust version, but forgot to un-set it.</p><p>Continuing down the troubleshooting rabbit-hole, we could have shell aliases.</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#0550AE;">type</span><span style="color:#24292F;"> rustc</span></span>
<span class="line"><span style="color:#0550AE;">type</span><span style="color:#24292F;"> cargo</span></span>
<span class="line"></span></code></pre></div><p>If these point to locations other than the one you saw when running <code>rustup which *</code>, then you have a problem. It\u2019s not enough to just</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#0550AE;">alias</span><span style="color:#24292F;"> rustc </span><span style="color:#0A3069;">&quot;~/.rustup/toolchains/stable-*/bin/rustc&quot;</span></span>
<span class="line"><span style="color:#0550AE;">alias</span><span style="color:#24292F;"> cargo </span><span style="color:#0A3069;">&quot;~/.rustup/toolchains/stable-*/bin/cargo&quot;</span></span>
<span class="line"></span></code></pre></div><p>because there is internal logic that could break regardless of how you re-arrange your shell aliases.</p><p>The simplest solution would be to remove the versions that you don\u2019t use. It&#39;s Easier <em>said</em> than <em>done</em>, however, since it entails tracking all the versions of rustup installed and available to you. Usually, there are only two: the system package manager version and the one that got installed into the standard location in your home folder when you ran the command in the beginning of this tutorial. For the former, consult your (Linux) distribution\u2019s manual, (<code>apt remove rust</code>). For the latter,</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">rustup toolchain list</span></span>
<span class="line"></span></code></pre></div><p>and</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">rustup remove </span><span style="color:#CF222E;">&lt;</span><span style="color:#24292F;">toolchain</span><span style="color:#CF222E;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>for every <code>&lt;toolchain&gt;</code>, (without the angle brackets of course).</p><p>After that, make sure that</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">cargo --help</span></span>
<span class="line"></span></code></pre></div><p>results in a command-not-found error, i.e. that you have no active rust toolchain installed. Then, run</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">rustup toolchain install stable</span></span>
<span class="line"></span></code></pre></div><p>If after all of this work, you still don\u2019t seem to have the right version, then the issue runs deeper.</p><h2 id="install-iroha-from-github" tabindex="-1">Install Iroha from GitHub <a class="header-anchor" href="#install-iroha-from-github" aria-hidden="true">#</a></h2><p>If you haven&#39;t already, you might want to create a clean folder for Iroha 2, to keep things tidy.</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">mkdir -p </span><span style="color:#CF222E;">~</span><span style="color:#24292F;">/Git</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>On macs, if you get <code>fatal: could not create work tree dir &#39;iroha&#39;: Read-only file system</code>, that&#39;s because the home folder is not a real file system. The fix is to create the <code>Git</code> folder</p></div><p>Enter the directory you have just created using</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#0550AE;">cd</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">~</span><span style="color:#24292F;">/Git</span></span>
<span class="line"></span></code></pre></div><p>Then <code>clone</code> the Iroha git repository into the folder <code>~/Git/iroha</code>.</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">git clone https://github.com/hyperledger/iroha.git</span></span>
<span class="line"></span></code></pre></div><p>This will fetch all of Iroha, including Iroha 1, and the <code>iroha2-dev</code> branch, which we will touch upon later.</p><p>Change directories</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#0550AE;">cd</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">~</span><span style="color:#24292F;">/Git/iroha</span></span>
<span class="line"></span></code></pre></div><p>and choose the right branch: the 1st preview release of Iroha 2!</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">git checkout </span><span style="color:#0A3069;">&quot;2.0.0-pre.1.rc.1&quot;</span></span>
<span class="line"></span></code></pre></div><p>After you have successfully cloned the Iroha git repository, and are on the correct branch, build the Iroha 2 client using:</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">cargo build -p iroha_client_cli</span></span>
<span class="line"></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>We take pride in the fact that Iroha is extremely quick to compile. For reference, compiling hyperledger/substrate takes a good part of ten minutes to compile on a modern M1 machine. Iroha, for comparison compiles in around 1.</p></div><h3 id="bring-up-a-minimal-network" tabindex="-1">Bring up a minimal network <a class="header-anchor" href="#bring-up-a-minimal-network" aria-hidden="true">#</a></h3><p>You can run Iroha directly on bare metal, but we recommend bringing up a network of 4 containerised peers using <code>docker-compose</code> . Of course, installing Docker might seem like a daunting task, but it allows for reproducible management of configurations, which is oftentimes tricky on bare metal. Please consult the <a href="/iroha-2-docs/guide/appendix/running-iroha-on-bare-metal.html">appendix</a> for how to do that.</p><div class="language-bash"><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">docker compose up</span></span>
<span class="line"></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>On a <em>properly</em> configured docker compose, you should never have to use <code>sudo</code> . If you do, consider looking into starting the docker d\xE6mon first by running <code>systemctl enable docker</code> on Linux. If that doesn&#39;t work, consider using</p></div><p>Depending on your set-up, this might either pull the container off of DockerHub, or build the container locally. After this (relatively short if pull, and long if build) process is complete, you&#39;ll be greeted with,</p><p><img src="`+n+'" alt=""></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When you&#39;re done with test network, just hit <code>Control + C</code> to stop the containers (<code>^ + C</code> on Mac).</p></div><p>As we said, you can also try and use the bare metal script. For testing we use <code>scripts/test_env.sh setup</code>, which will also start a set of Iroha peers. But that network is much harder to monitor, and unless you&#39;re well-versed in <code>killall</code> and reading log files with a proper text editor, we recommend that you don&#39;t go this route.</p><p>Unless you have an absolute aversion to <code>docker</code>, it&#39;s easier to work with, easier to set up, and easier to debug. We try to cater to all tastes, but some tastes have objective advantages.</p>',67),r=[i];function c(p,h,d,u,f,g){return a(),e("div",null,r)}var m=s(l,[["render",c]]);export{b as __pageData,m as default};
