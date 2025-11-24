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
	import {getDatabase, set, get,update,remove,ref,child,onValue}
	from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

	const db=getDatabase();
	const dbref=ref(db);
		
function loadCategories()
{
	var topnav=document.getElementById("category");
	if(topnav!=null)
	{
		topnav.innerHTML="";
		var inner="";
		get(child(dbref,"categories")).then((snapshot) => 
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
					inner+="<li><a href=\"\"id=\""+item.category+"\"class=\"categoryli\">"+item.category+"</a></li>";
					i++;
				}
				topnav.innerHTML=inner;
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
export function emptyInput()
{
	var search=document.getElementById('inputsearch');
	search.value="";
	distributeAll();
}
export function distributeAll()
{
	document.getElementById("mycart").src ="png/cart3.png";
	var search=document.getElementById('inputsearch').value;
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
					if(item.name.indexOf(search) !== -1)
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
	if(page!=null)
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
function saveCategory(cat)
{
	localStorage.setItem('lastcat',cat);
}
function loadCategory()
{
	let lastcat=localStorage.getItem('lastcat');
	if(lastcat.length>0)distribute(lastcat);
	else 
	{
		distributeMyCart();
	}	
}
function deliverDatabase()
{
	if(checkForm())
	{
		var name=document.getElementById("fullname");
		var phone=document.getElementById("phone");
		var address=document.getElementById("address");
		localStorage.setItem('fullname',name.value);
		localStorage.setItem('phone',phone.value);
		localStorage.setItem('address',address.value);
		var cartList="";
		for (let i = 0; i < mycart.length;i++) 
		{
			const product = mycart[i];
			cartList+=product.id+":"+product.quantity+";";
		}
		set(ref(db,'requests/1'),{fullname:removeSpecialChars(name.value),phone:removeSpecialChars(phone.value),address:removeSpecialChars(address.value),cart:cartList,total:updateTotal()});
		emptyMyCart();
		hideForm();
		let lastcat=localStorage.getItem('lastcat');
		if(lastcat.length>0)distribute(lastcat);
		else distributeMyCart();
		var message=document.getElementById("message-label");
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
document.addEventListener('DOMContentLoaded', () => 
{
	const categoryUL = document.getElementById('category');
	const mycart = document.getElementById('mycart');
	const emptycart = document.getElementById('emptycart');
	const login_form = document.getElementById('login_form');
	login_form.addEventListener('click', (event) => 
	{
		deliverDatabase();
	});
	mycart.addEventListener('click', (event) => 
	{
		distributeMyCart();
	});
	emptycart.addEventListener('click', (event) => 
	{
		let lastcat=localStorage.getItem('lastcat');
		if(lastcat.length>0)distribute(lastcat);
		else 
		{
			distributeMyCart();
		}
	});
	if(categoryUL!=null)
	{
		categoryUL.addEventListener('click', (event) => 
		{
			// Check if the clicked element (event.target) or one of its parents is a `.block`
			const clickedCategory = event.target.closest('a');

			if (clickedCategory) 
			{
				event.preventDefault(); 
				const catName = clickedCategory.getAttribute('id');
				distribute(catName);
			}
		});
	}
});
document.addEventListener('DOMContentLoaded',loadCategories);
document.addEventListener('DOMContentLoaded',loadCategory);
