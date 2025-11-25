import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

	const firebaseConfig = 
	{
	    apiKey: "AIzaSyCyizOZNUcbczGjh1P0sxn85LoiLI9Q0yw",
	    authDomain: "sahashop-97ae5.firebaseapp.com",
	    databaseURL: "https://sahashop-97ae5-default-rtdb.firebaseio.com",
	    projectId: "sahashop-97ae5",
	    storageBucket: "sahashop-97ae5.firebasestorage.app",
	    messagingSenderId: "620364206298",
	    appId: "1:620364206298:web:bb9a99e5e60e4be3dad5e3"
	};
	const app = initializeApp(firebaseConfig);
	import {getDatabase, set, get,update,remove,ref,runTransaction,child,onValue}
	from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

	const db=getDatabase();
	const dbref=ref(db);
	
function getNow()
{
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth() + 1; // Add 1 because months are 0-indexed
	const day = today.getDate();
	const hour = today.getHours();
	const minute = today.getMinutes();
	const second = today.getSeconds();
	//console.log(year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second);
	return year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
}
function saveDriver(drivername,user,pass)
{
	localStorage.setItem('drivername',drivername);
	localStorage.setItem('username',user);
	localStorage.setItem('password',pass);
}
function loadRequests()
{
	var empty=document.getElementById("empty-request");
	var request_section=document.getElementById("request_section");
	var found=false;
	const drivername = localStorage.getItem('drivername');
	if(drivername!=null&&drivername.length>0)
	{
		document.getElementById("drivername").innerHTML=drivername;
		document.getElementById("driver-login").style.display="none";
		document.getElementById("driver-logout").style.display="block";
		var inner="";
		get(child(dbref,"requests")).then((snapshot) => 
		{
			if (snapshot.exists()) 
			{
				const data = snapshot.val();
				const keys = Object.keys(data);
				let i = 0;
				while (i < keys.length) 
				{
					const key = keys[i];
					const item = data[key];
					if(item.driver==drivername)
					{
						inner+="<li><a href=\"\"id=\""+key+"\"class=\"categoryli\">طلبية رقم:"+key+"&nbsp;بإسم:"+item.fullname+"</a></li>";		
						found=true;
					}
					i++;
				}
				if(found)
				{
					request_section.innerHTML="<ul id='category'class='category'>"+inner+"</ul>";
					//topnav.add(request_section);
				}
				else
				{
					request_section.innerHTML="<span id='empty-request'class='empty-request'>No Requests For Now</span>";
				}
			} else {
				console.log("No data available");
			}
		}).catch((error) => 
		{
			console.error(error);
		});
	}
}
function distribute(cat)
{
	saveCategory(cat);
	document.getElementById("mycart").src ="png/cart3.png";
	document.getElementById('numberitems').innerHTML="";
	var inner="";
	var inners="";
	var im="0";
	var price="";
	var quantity=0;
	var display="none";
	var page=document.getElementById("page");
	if(page!=null)
	{
		get(child(dbref,"products")).then((snapshot) => 
		{
			if (snapshot.exists()) 
			{
				const data = snapshot.val();
				const keys = Object.keys(data);
				let i = 0;
				while (i < keys.length) 
				{
					const key = keys[i];
					const item = data[key];
					if(cat==item.category||cat=="الكل")
					{
						if(item.pngExist>0)im=""+key;
						if(item.price>=1000)price=numberComma(item.price)+" L.L.";
						else price=item.price+" $";
						quantity=getItemQuantity(item.name);
						if(quantity>0)display="block";
						else display="none";
						inner="<article class=\"product-card\"><a href=\"javascript:addProductToCart('"+key+"','"+item.name+"',"+item.price+","+item.pngExist+");\"><img class=\"prod-image\"src=\"png/products/"+im+".png\"></a><a href=\"javascript:addProductToCart('"+key+"','"+item.name+"',"+item.price+","+item.pngExist+");\"><img id=\"cart"+item.name+"\" class=\"cart\" style=\"display:"+display+"\"src=\"png/cart2.png\"></a><a href=\"javascript:plus('"+key+"','"+item.name+"',"+item.price+","+item.pngExist+");\"><img class=\"plus\" src=\"png/plus.png\"></a><a href=\"javascript:minus('"+item.name+"');\"><img class=\"minus\" src=\"png/minus.png\"></a><a href=\"javascript:remove('"+item.name+"');\"><img class=\"remove\" src=\"png/delete.png\"></a><p id=\"quantity"+item.name+"\"class=\"quantity\">"+quantity+"</p><p id=\"product"+item.name+"\"class=\"productname\">"+item.name+"</p><p id=\"price"+item.name+"\"class=\"productprice\">"+price+"</p></article>";
						inners+=inner;
					}
					
					i++;
				}
				page.innerHTML=inners;
			} 
			else 
			{
				console.log("No data available");
			}
		}).catch((error) => 
		{
			console.error(error);
		});
	}
}
function distributeMyCart()
{
	if(mycart!=null)
	{
		saveCategory("");
		loadDictionary();
		document.getElementById("mycart").src ="png/cart4.png";
		document.getElementById('numberitems').innerHTML="";
		var inner="";
		var inners="";
		var im="0";
		var price="";
		var quantity=0;
		var display="none";
		var page=document.getElementById("page");
		if(page!=null&&mycart!=null)
		{
			for (let i = 0; i < mycart.length; i++) 
			{
				const item= mycart[i];
				
				if(item.pngExist>0)im=""+item.id;
				else im="0";
				if(item.price>=1000)price=numberComma(item.price)+" L.L.";
				else price=item.price+" $";
				quantity=getItemQuantity(item.name);
				if(quantity>0)display="block";
				else display="none";
				inner="<article class=\"product-card\"><img class=\"prod-image\"src=\"png/products/"+im+".png\"><a href=\"javascript:plus2('"+item.id+"','"+item.name+"',"+item.price+","+item.pngExist+");\"><img class=\"plus\" src=\"png/plus.png\"></a><a href=\"javascript:minus2('"+item.name+"');\"><img class=\"minus\" src=\"png/minus.png\"></a><a  href=\"javascript:remove2('"+item.name+"');\"><img class=\"remove\" src=\"png/delete.png\"></a><p id=\"quantity"+item.name+"\"class=\"quantity\">"+quantity+"</p><p id=\"product"+item.name+"\"class=\"productname\">"+item.name+"</p><p id=\"price"+item.name+"\"class=\"productprice\">"+price+"</p></article>";
				inners+=inner;
			}
			page.innerHTML=inners;
		}
	}
}
function loginDriver()
{
	var username=document.getElementById("username");
	var password=document.getElementById("password");
	var success=false;
	if(username.value.length>0&&password.value.length>0)
	{
		get(child(dbref,"drivers")).then((snapshot) => 
		{
			if (snapshot.exists()) 
			{
				const data = snapshot.val();
				const keys = Object.keys(data);
				let i = 0;
				while (i < keys.length) 
				{
					const key = keys[i];
					const item = data[key];
					//console.log(username.value+":"+item.username);
					if(username.value==item.username&&password.value==item.password)
					{
						hideForm();
						success=true;
						localStorage.setItem('drivername',item.drivername);
						document.getElementById("drivername").innerHTML=item.drivername;
						loadRequests();
					}
					i++;
				}
				if(!success)
				{
					var message=document.getElementById("message-label2");
					message.style.display="block";
					window.setTimeout(function() 
					{
						if (message) 
						{
							message.classList.add('hidden');
						}
					}, 3000);
					message.style.display="block";
					message.classList.remove('hidden');
				}
			}
		});
	}
}
document.addEventListener('DOMContentLoaded', () => 
{
	const login_btn = document.getElementById('driver-login');
	const logout_btn = document.getElementById('driver-logout');
	const login_form = document.getElementById('login_form');
	login_form.addEventListener('click', (event) => 
	{
		loginDriver();
	});
	if(login_btn!=null)
	{
		login_btn.addEventListener('click', (event) => 
		{
			event.preventDefault(); 
			showForm2();
			login_btn.style.display="none";
		});
	}
	if(logout_btn!=null)
	{
		logout_btn.addEventListener('click', (event) => 
		{
			event.preventDefault(); 
			login_btn.style.display="block";
			logout_btn.style.display="none";
			localStorage.setItem('drivername',"");
			document.getElementById("drivername").innerHTML="";
			document.getElementById("request_section").innerHTML="";
		});
	}
});
document.addEventListener('DOMContentLoaded',loadRequests);
