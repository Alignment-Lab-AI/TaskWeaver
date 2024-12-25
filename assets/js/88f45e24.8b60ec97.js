"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4117],{1577:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=o(4848),i=o(8453);const r={},s="Code Execution",c={id:"code_execution",title:"Code Execution",description:"\ud83d\udca1We have set the container mode as default for code execution, especially when the usage of the agent",source:"@site/docs/code_execution.md",sourceDirName:".",slug:"/code_execution",permalink:"/TaskWeaver/docs/code_execution",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/docs/code_execution.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Quick Start",permalink:"/TaskWeaver/docs/quickstart"},next:{title:"Memory",permalink:"/TaskWeaver/docs/memory"}},a={},d=[{value:"Two Modes of Code Execution",id:"two-modes-of-code-execution",level:2},{value:"How to Configure the Code Execution Mode",id:"how-to-configure-the-code-execution-mode",level:2},{value:"How to customize the Docker image for code execution",id:"how-to-customize-the-docker-image-for-code-execution",level:2},{value:"Limitations of the <code>container</code> Mode",id:"limitations-of-the-container-mode",level:2},{value:"Restricting External Network Access for Docker Containers",id:"restricting-external-network-access-for-docker-containers",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"code-execution",children:"Code Execution"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\ud83d\udca1We have set the ",(0,t.jsx)(n.code,{children:"container"})," mode as default for code execution, especially when the usage of the agent\nis open to untrusted users. Refer to ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/security/",children:"Docker Security"})," for better understanding\nof the security features of Docker. To opt for the ",(0,t.jsx)(n.code,{children:"local"})," mode, you need to explicitly set the ",(0,t.jsx)(n.code,{children:"execution_service.kernel_mode"}),"\nparameter in the ",(0,t.jsx)(n.code,{children:"taskweaver_config.json"})," file to ",(0,t.jsx)(n.code,{children:"local"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"TaskWeaver is a code-first agent framework, which means that it always converts the user request into code\nand executes the code to generate the response. In our current implementation, we use a Jupyter Kernel\nto execute the code. We choose Jupyter Kernel because it is a well-established tool for interactive computing,\nand it supports many programming languages."}),"\n",(0,t.jsx)(n.h2,{id:"two-modes-of-code-execution",children:"Two Modes of Code Execution"}),"\n",(0,t.jsxs)(n.p,{children:["TaskWeaver supports two modes of code execution: ",(0,t.jsx)(n.code,{children:"local"})," and ",(0,t.jsx)(n.code,{children:"container"}),".\nThe ",(0,t.jsx)(n.code,{children:"container"})," mode is the default mode. The key difference between the two modes is that the ",(0,t.jsx)(n.code,{children:"container"})," mode\nexecutes the code inside a Docker container, which provides a more secure environment for code execution, while\nthe ",(0,t.jsx)(n.code,{children:"local"})," mode executes the code as a subprocess of the TaskWeaver process.\nAs a result, in the ",(0,t.jsx)(n.code,{children:"local"})," mode, if the user has malicious intent, the user could potentially\ninstruct TaskWeaver to execute harmful code on the host machine. In addition, the LLM could also generate\nharmful code, leading to potential security risks."]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["Please be cautious when using the ",(0,t.jsx)(n.code,{children:"local"})," mode, especially when the usage of the agent is open to untrusted users."]})}),"\n",(0,t.jsx)(n.h2,{id:"how-to-configure-the-code-execution-mode",children:"How to Configure the Code Execution Mode"}),"\n",(0,t.jsxs)(n.p,{children:["To configure the code execution mode, you need to set the ",(0,t.jsx)(n.code,{children:"execution_service.kernel_mode"})," parameter in the\n",(0,t.jsx)(n.code,{children:"taskweaver_config.json"})," file. The value of the parameter could be ",(0,t.jsx)(n.code,{children:"local"})," or ",(0,t.jsx)(n.code,{children:"container"}),". The default value\nis ",(0,t.jsx)(n.code,{children:"container"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["TaskWeaver supports the ",(0,t.jsx)(n.code,{children:"local"})," mode without any additional setup. However, to use the ",(0,t.jsx)(n.code,{children:"container"})," mode,\nthere are a few prerequisites:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Docker is installed on the host machine."}),"\n",(0,t.jsx)(n.li,{children:"A Docker image is built and available on the host machine for code execution."}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"execution_service.kernel_mode"})," parameter is set to ",(0,t.jsx)(n.code,{children:"container"})," in the ",(0,t.jsx)(n.code,{children:"taskweaver_config.json"})," file."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Once the code repository is cloned to your local machine, you can build the Docker image\nby running the following command in the root directory of the code repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd scripts\n\n# based on your OS\n./build_executor.ps1 # for Windows\n./build_executor.sh # for Linux or macOS\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After the Docker image is built, you can run ",(0,t.jsx)(n.code,{children:"docker images"})," to check if a Docker image\nnamed ",(0,t.jsx)(n.code,{children:"taskweavercontainers/taskweaver-executor"})," is available.\nIf the prerequisite is met, you can now run TaskWeaver in the ",(0,t.jsx)(n.code,{children:"container"})," mode."]}),"\n",(0,t.jsxs)(n.p,{children:["After running TaskWeaver in the ",(0,t.jsx)(n.code,{children:"container"})," mode, you can check if the container is running by running ",(0,t.jsx)(n.code,{children:"docker ps"}),".\nYou should see a container of image ",(0,t.jsx)(n.code,{children:"taskweavercontainers/taskweaver-executor"})," running after executing some code."]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-customize-the-docker-image-for-code-execution",children:"How to customize the Docker image for code execution"}),"\n",(0,t.jsxs)(n.p,{children:["You may want to customize the Docker image for code execution to include additional packages or libraries, especially\nfor your developed plugins. The current Docker image for code execution only includes the dependencies specified in the ",(0,t.jsx)(n.code,{children:"TaskWeaver/requirements.txt"})," file. To customize the Docker image, you need to\nmodify the ",(0,t.jsx)(n.code,{children:"Dockerfile"})," at ",(0,t.jsx)(n.code,{children:"TaskWeaver/docker/ces_container/Dockerfile"})," and rebuild the Docker image."]}),"\n",(0,t.jsxs)(n.p,{children:["When you open the ",(0,t.jsx)(n.code,{children:"Dockerfile"}),", you will see the following content, and you can add additional packages or libraries\nby adding the corresponding ",(0,t.jsx)(n.code,{children:"RUN"})," command. In this example, we add the ",(0,t.jsx)(n.code,{children:"sentence-transformers"})," package to the Docker image."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Dockerfile",children:"FROM python:3.10-slim\n...\n# TODO: Install additional packages for plugins\nRUN pip install --no-cache-dir --no-warn-script-location --user sentence-transformers\n...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then, you need to rebuild the Docker image by running the ",(0,t.jsx)(n.code,{children:"build_executor.sh"})," script at ",(0,t.jsx)(n.code,{children:"TaskWeaver/scripts/build_executor.sh"}),"\nor ",(0,t.jsx)(n.code,{children:"TaskWeaver/scripts/build.ps1"})," depending on your operating system."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd TaskWeaver/scripts\n./build_executor.sh\n# or ./build_executor.ps1 if you are using Windows\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you have successfully rebuilt the Docker image, you can check the new image by running ",(0,t.jsx)(n.code,{children:"docker images"}),".\nAfter building the Docker image, you need to restart the TaskWeaver agent to use the new Docker image."]}),"\n",(0,t.jsxs)(n.h2,{id:"limitations-of-the-container-mode",children:["Limitations of the ",(0,t.jsx)(n.code,{children:"container"})," Mode"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"container"})," mode is more secure than the ",(0,t.jsx)(n.code,{children:"local"})," mode, but it also has some limitations:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The startup time of the ",(0,t.jsx)(n.code,{children:"container"})," mode is longer than the ",(0,t.jsx)(n.code,{children:"local"})," mode, because it needs to start a Docker container."]}),"\n",(0,t.jsxs)(n.li,{children:["As the Jupyter Kernel is running inside a Docker container, it has limited access to the host machine. We are mapping the\n",(0,t.jsx)(n.code,{children:"project/workspace/sessions/<session_id>"})," directory to the container, so the code executed in the container can access the\nfiles in it. One implication of this is that the user cannot ask the agent to load a file from the host machine, because the\nfile is not available in the container. Instead, the user needs to upload the file either using the ",(0,t.jsx)(n.code,{children:"/upload"})," command in\nthe console or the ",(0,t.jsx)(n.code,{children:"upload"})," button in the web interface."]}),"\n",(0,t.jsxs)(n.li,{children:["We have installed required packages in the Docker image to run the Jupyter Kernel. If the user needs to use a package that is\nnot available in the Docker image, the user needs to add the package to the Dockerfile (at ",(0,t.jsx)(n.code,{children:"TaskWeaver/ces_container/Dockerfile"}),")\nand rebuild the Docker image."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"restricting-external-network-access-for-docker-containers",children:"Restricting External Network Access for Docker Containers"}),"\n",(0,t.jsx)(n.p,{children:"In some cases, the agent developer may want to restrict the Docker container's access to the external network, e.g., the internet.\nIn other words, the agent developer only wants to run the code in the container but does not allow either\nthe plugins or the generated code to access the internet."}),"\n",(0,t.jsx)(n.p,{children:"The following approach is a common way to restrict a Docker container's access to the internet while still\nallowing inbound connections on specific ports:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["Creating a Docker network with ",(0,t.jsx)(n.code,{children:"enable_ip_masquerade"})," set to false"]}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["By default, Docker uses IP masquerading (a form of network address translation or NAT) to allow containers\nto communicate with external networks with the source IP address being the host IP address.\nWhen you set ",(0,t.jsx)(n.code,{children:"enable_ip_masquerade"})," to false for a custom Docker network,\nyou prevent containers on that network from having their IP addresses masqueraded, effectively blocking them\nfrom accessing the internet. To create such a network in Docker, you would use the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker network create --opt com.docker.network.bridge.enable_ip_masquerade=false my_non_internet_network  \n"})}),"\n",(0,t.jsxs)(n.p,{children:["Any container connected to ",(0,t.jsx)(n.code,{children:"my_non_internet_network"})," will not have internet access due to the disabled IP masquerade.",(0,t.jsx)(n.br,{}),"\n","Now, you can run"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker network inspect my_non_internet_network\n"})}),"\n",(0,t.jsx)(n.p,{children:"and you will see an output similar to the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"Config": [\n    {\n        "Subnet": "172.19.0.0/16",\n        "Gateway": "172.19.0.1"\n    }\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"This shows the subnet of the docker network, all containers connected to this network will have an IP address in this subnet."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Establishing a rule on the host's firewall or using iptables"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"This step is about setting up rules to block outgoing traffic from the Docker network's subnet\nto any external addresses. This adds an additional layer of security to ensure that even\nif IP masquerade is somehow enabled or if the container finds another route, the traffic will still be blocked."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"On a Linux host using iptables"}),", you might add a rule like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"iptables -I FORWARD -s <docker_network_subnet> -j DROP  \n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"<docker_network_subnet>"})," with the actual subnet used by your Docker network.\nIn the previous example, the subnet is ",(0,t.jsx)(n.code,{children:"172.19.0.0/16"}),". This rule drops all forwarding traffic from that subnet."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"On a Windows host"}),", you would create a similar rule within the Windows Firewall\nto block outgoing traffic from the Docker network's subnet."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Keep in mind that this approach can be considered good practice if you understand the implications\nand have a specific need to isolate your container from the internet.\nHowever, it could also complicate network troubleshooting and container communication if not managed properly.\nAlways ensure you are testing these configurations in a safe environment before applying them to production systems."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var t=o(6540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);