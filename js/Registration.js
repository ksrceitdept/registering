function previewImage(e,t){if(e.files&&e.files[0]){var a=new FileReader;a.onload=function(e){t.src=e.target.result,t.style.display="block"},a.readAsDataURL(e.files[0])}else t.style.display="none"}function setupImagePreview(e,t){var a=document.getElementById(e),s=document.getElementById(t);a.addEventListener("change",function(e){previewImage(e.target,s)})}let A=document.getElementById("payment-amount");function validateEvents(e){var t=document.querySelectorAll('input[name="events[]"][data-type="tech"]:checked'),a=document.querySelectorAll('input[name="events[]"][data-type="tech"]'),s=document.querySelectorAll('input[name="events[]"][data-type="non-tech"]:checked'),i=document.querySelectorAll('input[name="events[]"][data-type="workshop"]:checked'),l=Array.from(t).map(e=>e.value),r=Array.from(s).map(e=>e.value),n=Array.from(i).map(e=>e.value),m=l.length+r.length+n.length,p=document.getElementById("pp-team-member-details"),o=document.getElementById("pe-team-member-details"),d=document.getElementById("pp-team-member-size"),u=document.getElementById("pe-team-member-size");document.getElementById("total-price"),m>2?(new Notify({status:"warning",title:"You can participate in a maximum of two events.",text:"",autoclose:!0,autotimeout:3e3,effect:"slide",speed:300,position:"right bottom"}),e.target.checked=!1):(a.forEach(e=>{"paperPresentation"===e.id?(p.style.display="none",setRequiredAttributes(d,!1)):"projectExpo"===e.id&&(o.style.display="none",setRequiredAttributes(u,!1))}),t.forEach(e=>{"paperPresentation"===e.id?(p.style.display="block",setRequiredAttributes(d,!0)):"projectExpo"===e.id&&(o.style.display="block",setRequiredAttributes(u,!0))}),m>=1?A.innerHTML="350":A.innerHTML="0")}setupImagePreview("idCard","preview"),setupImagePreview("pp-team-member-2-idCard","pp-team-member-2-id-preview"),setupImagePreview("pp-team-member-3-idCard","pp-team-member-3-id-preview"),setupImagePreview("pe-team-member-2-idCard","pe-team-member-2-id-preview"),setupImagePreview("payment-screenshot","payment-screenshot-preview");var checkboxes=document.querySelectorAll('input[name="events[]"]');function setRequiredAttributes(e,t){e&&e.querySelectorAll("input, select").forEach(function(e){t?e.setAttribute("required",t.toString()):e.removeAttribute("required"),e.value=""})}checkboxes.forEach(function(e){e.addEventListener("change",validateEvents)}),document.getElementById("pp-team-member-size").addEventListener("change",e=>{let t=document.getElementById("pp-team-member-2-details"),a=document.getElementById("pp-team-member-3-details");2==e.target.value?(A.innerHTML="700",t.style.display="flex",a.style.display="none",setRequiredAttributes(t,!0),setRequiredAttributes(a,!1)):3==e.target.value?(A.innerHTML="1050",t.style.display="flex",a.style.display="flex",setRequiredAttributes(t,!0),setRequiredAttributes(a,!0)):(t.style.display="none",a.style.display="none",setRequiredAttributes(t,!1),setRequiredAttributes(a,!1))}),document.getElementById("pe-team-member-size").addEventListener("change",e=>{let t=document.getElementById("pe-team-member-2-details");2==e.target.value?(A.innerHTML=700>parseInt(A.innerHTML)?"700":A.innerHTML,t.style.display="flex",setRequiredAttributes(t,!0)):(t.style.display="none",setRequiredAttributes(t,!1))});let loader=document.getElementById("register-loader");async function sendFormDataToServer(e){try{let t=await (await fetch("https://script.google.com/macros/s/AKfycbwdctjUmhmjgmDEShVrvJLSZywvEH--XIcF6g-0RyoeizprzgFVIpdisYEkbloyJklf/exec",{method:"POST",body:JSON.stringify(e)})).json();loader.style.display="none",console.log("response",t);let a=t.result,s,i;return"success"===a?(s="Registration Successful",i="Thank you for registering with us!"):"error"===a?(s="Registration Failed",i="Oops! Something went wrong. Please try again."):(s="Unexpected Response",i="An unexpected response was received. Please contact support."),new Notify({status:a,title:s,text:i,autoclose:!0,autotimeout:3e3,effect:"slide",speed:300,position:"right bottom"}),"success"===a}catch(l){return loader.style.display="none",console.error("Error:",l),new Notify({status:"error",title:"Registration Error",text:"Sorry, your registration could not be recorded. Please try again later.",autoclose:!0,autotimeout:3e3,effect:"slide",speed:300,position:"right bottom"}),!1}}document.getElementById("myForm").addEventListener("submit",async function(e){e.preventDefault();let t=document.getElementById("RegisterButton");t.disabled=!0,t.innerHTML="proceeding...",loader.style.display="block";var a=document.querySelectorAll('input[name="events[]"][data-type="tech"]:checked'),s=document.querySelectorAll('input[name="events[]"][data-type="non-tech"]:checked'),i=document.querySelectorAll('input[name="events[]"][data-type="workshop"]:checked'),l=Array.from(a).map(e=>e.value).concat(Array.from(s).map(e=>e.value)).concat(Array.from(i).map(e=>e.value));if(0===l.length)return t.disabled=!1,t.innerHTML="Register",loader.style.display="none",new Notify({status:"error",title:"Selection Error",autoclose:!0,autotimeout:3e3,text:"Please make sure to select at least one event before proceeding.",effect:"slide",speed:300,position:"right bottom"});let r=new FileReader,n,m,p,o,d=(e,t)=>new Promise((a,s)=>{t.onloadend=()=>a(t),t.readAsDataURL(e)});await d(this.elements.idCard.files[0],r),await Promise.all(l.map(async e=>{"Paper Presentation"===e?"2"===this.elements.ppTeamMemberSize.value?this.elements.ppTeamMember2idCard.files&&this.elements.ppTeamMember2idCard.files[0]&&await d(this.elements.ppTeamMember2idCard.files[0],n=new FileReader):"3"===this.elements.ppTeamMemberSize.value&&(this.elements.ppTeamMember2idCard.files&&this.elements.ppTeamMember2idCard.files[0]&&await d(this.elements.ppTeamMember2idCard.files[0],n=new FileReader),this.elements.ppTeamMember3idCard.files&&this.elements.ppTeamMember3idCard.files[0]&&await d(this.elements.ppTeamMember3idCard.files[0],m=new FileReader)):"Project Expo"===e&&"2"===this.elements.peTeamMemberSize.value&&this.elements.peTeamMember2idCard.files&&this.elements.peTeamMember2idCard.files[0]&&await d(this.elements.peTeamMember2idCard.files[0],p=new FileReader)})),this.elements.paymentScreenshot.files[0]&&await d(this.elements.paymentScreenshot.files[0],o=new FileReader);let u={basicInfo:{name:this.elements.name.value,email:this.elements.email.value,phone:this.elements.phone.value,college:this.elements.college.value,department:this.elements.department.value,year:this.elements.year.value,foodType:this.elements.FoodType.value,idCard:{base64:r.result.split("base64,")[1],type:this.elements.idCard.files[0].type,fileName:this.elements.idCard.files[0].name}},eventInfo:{noOfEvents:l.length,events:l},paperPresentation:{teamSize:this.elements.ppTeamMemberSize.value,teamMembers:[{name:this.elements.ppTeamMember2Name.value,email:this.elements.ppTeamMember2Email.value,phone:this.elements.ppTeamMember2Phone.value,college:this.elements.ppTeamMember2College.value,department:this.elements.ppTeamMember2Department.value,year:this.elements.ppTeamMember2Year.value,idCard:n?{base64:n.result.split("base64,")[1],type:this.elements.ppTeamMember2idCard.files[0].type,fileName:this.elements.ppTeamMember2idCard.files[0].name}:null},{name:this.elements.ppTeamMember3Name.value,email:this.elements.ppTeamMember3Email.value,phone:this.elements.ppTeamMember3Phone.value,college:this.elements.ppTeamMember3College.value,department:this.elements.ppTeamMember3Department.value,year:this.elements.ppTeamMember3Year.value,idCard:m?{base64:m.result.split("base64,")[1],type:this.elements.ppTeamMember3idCard.files[0].type,fileName:this.elements.ppTeamMember3idCard.files[0].name}:null},]},projectExpo:{teamSize:this.elements.peTeamMemberSize.value,teamMembers:[{name:this.elements.peTeamMember2Name.value,email:this.elements.peTeamMember2Email.value,phone:this.elements.peTeamMember2Phone.value,college:this.elements.peTeamMember2College.value,department:this.elements.peTeamMember2Department.value,year:this.elements.peTeamMember2Year.value,idCard:p?{base64:p.result.split("base64,")[1],type:this.elements.peTeamMember2idCard.files[0].type,fileName:this.elements.peTeamMember2idCard.files[0].name}:null},]},payment:{transactionScreenshot:o?{base64:o.result.split("base64,")[1],type:this.elements.paymentScreenshot.files[0].type,fileName:this.elements.paymentScreenshot.files[0].name}:null,transactionID:this.elements.transactionID.value,amount:`₹ ${A.innerText}`}};console.log(u);await sendFormDataToServer(u)?(loader.style.display="none",e.target.innerHTML='<div class="container mt-5"><div class="alert alert-success text-center"><h4 class="alert-heading">Registration has been successfully recorded</h4><p>Thank you! Please check your mail for confirmation. Our team will review your information shortly.</p><a href="/" class="alert-link">Go to homepage</a></div></div>',window.scrollTo(0,0)):(t.disabled=!1,t.innerHTML="Register")});
