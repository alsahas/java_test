let mycart =
[
/*  { name: 'product7',quantity:1, price: 40000 },
  { name: 'product8',quantity:2, price: 45000 }*/
];
function showForm()
{
	document.getElementById("myForm").style.display="block";
	document.getElementById("fullname").value=localStorage.getItem('fullname');
	document.getElementById("phone").value=localStorage.getItem('phone');
	document.getElementById("address").value=localStorage.getItem('address');
	if(checkForm())document.getElementById("login_form").className="btn";
	else document.getElementById("login_form").className="btn2";
}
function showForm2()
{
	document.getElementById("myForm").style.display="block";
	document.getElementById("username").value=localStorage.getItem('username');
	document.getElementById("password").value=localStorage.getItem('password');
	if(checkForm2())document.getElementById("login_form").className="btn";
	else document.getElementById("login_form").className="btn2";
}
function hideForm()
{
	document.getElementById("myForm").style.display="none";
}
function hideForm()
{
	document.getElementById("myForm").style.display="none";
	document.getElementById("driver-login").style.display="block";
}
function checkForm()
{
	var name=document.getElementById("fullname");
	var phone=document.getElementById("phone");
	var address=document.getElementById("address");
	if(name.value.length>0&&phone.value.length>0&&address.value.length>0)
	{
		document.getElementById("login_form").className="btn";
		return true;
	}
	else
	{
		document.getElementById("login_form").className="btn2";
		return false;
	}	
}
function checkForm2()
{
	var username=document.getElementById("username");
	var password=document.getElementById("password");
	if(username.value.length>0&&password.value.length>0)
	{
		document.getElementById("login_form").className="btn";
		return true;
	}
	else
	{
		document.getElementById("login_form").className="btn2";
		return false;
	}	
}
function getItemQuantity(nom)
{
	var result=0;
	if(mycart!=null)
	{
		for (let i = 0; i < mycart.length; i++) 
		{
			const product = mycart[i];
			
			if(nom==product.name)
			{
				result=product.quantity;
			}
		}
	}
	return result;
}
function saveDictionary()
{
	const dictionaryAsString = JSON.stringify(mycart);
	localStorage.setItem('userData', dictionaryAsString);
}
function loadDictionary()
{
	const storedDictionaryAsString = localStorage.getItem('userData');
	mycart = JSON.parse(storedDictionaryAsString);
	if(mycart!=null)document.getElementById("items").innerHTML=""+mycart.length;
	else document.getElementById("items").innerHTML="0";
	updateTotal();
}
function emptyMyCart()
{
	mycart=[];
	saveDictionary();
	updateTotal();
}
function plus(idd,nom,pr,exist)
{
	var q;
	let found=false;
	for (let i = 0; i < mycart.length;i++) 
	{
		const product = mycart[i];
		if(product.name==nom)
		{
			mycart[i].quantity++;
			q=document.getElementById("quantity"+nom);
			q.innerHTML=mycart[i].quantity;
			document.getElementById("quantity"+nom).innerHTML = ""+mycart[i].quantity;
			found=true;
		}
	}
	if(!found)
	{
		document.getElementById("cart"+nom).style.display = "block";
		document.getElementById("quantity"+nom).innerHTML = "1";
		let row={id:idd,name:nom,quantity:1,price:pr,pngExist:exist};
		mycart.push(row);
	}
	//distributeMyCart();
	updateTotal();
}
function minus(name)
{
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==name)
		{
			if(product.quantity==1)
			{
				remove(name);
			}
			else if(product.quantity>1)
			{
				mycart[i].quantity--;
				q=document.getElementById("quantity"+name);
				q.innerHTML=mycart[i].quantity;
			}
		}
	}
	updateTotal();
}
function remove(name)
{
	var dict=[];
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==name);
		else dict.push(mycart[i]);
	}
	mycart=dict.slice();
	document.getElementById("cart"+name).style.display = "none";
	document.getElementById("quantity"+name).innerHTML = "0";
	updateTotal();
}
function plus2(idd,nom,pr,exist)
{
	var q;
	let found=false;
	for (let i = 0; i < mycart.length;i++) 
	{
		const product = mycart[i];
		if(product.name==nom)
		{
			mycart[i].quantity++;
			q=document.getElementById("quantity"+nom);
			q.innerHTML=mycart[i].quantity;
			document.getElementById("quantity"+nom).innerHTML = ""+mycart[i].quantity;
			found=true;
		}
	}
	if(!found)
	{
		document.getElementById("quantity"+nom).innerHTML = "1";
		let row={id:idd,name:nom,quantity:1,price:pr,pngExist:exist};
		mycart.push(row);
	}
	//distributeMyCart();
	updateTotal();
}
function minus2(name)
{
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==name)
		{
			if(product.quantity>=1)
			{
				mycart[i].quantity--;
				q=document.getElementById("quantity"+name);
				q.innerHTML=mycart[i].quantity;
			}
		}
	}
	updateTotal();
	saveDictionary();
}
function remove2(name)
{
	var dict=[];
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==name);
		else dict.push(mycart[i]);
	}
	mycart=dict.slice();
	document.getElementById("quantity"+name).innerHTML = "0";
	updateTotal();
}
function addProductToCart(idd,nom,pr,exist)
{
	var dict = [];
	let found=false;
	
	if(mycart!=null)
	{
		for (let i = 0; i < mycart.length; i++) 
		{
			const product = mycart[i];
			if(product.name==nom)found=true;
			else dict.push(mycart[i]);
		}
		if(!found)
		{
			document.getElementById("cart"+nom).style.display = "block";
			document.getElementById("quantity"+nom).innerHTML = "1";
			let row={id:idd,name:nom,quantity:1,price:pr,pngExist:exist};
			dict.push(row);
			mycart = dict.slice();
		}
		else
		{
			document.getElementById("cart"+nom).style.display = "none";
			document.getElementById("quantity"+nom).innerHTML = "0";
		}
		mycart=dict;
	}
	else
	{
		mycart=dict;
		addProductToCart(idd,nom,pr,exist);
	}
	updateTotal();
}
function updateTotal()
{
	if(mycart!=null)
	{
		let total=0;
		for (let i = 0; i < mycart.length; i++) 
		{
			if(mycart[i].price>1000)total+=mycart[i].price*mycart[i].quantity;
			else total+=parseInt(90000*(mycart[i].price)*(mycart[i].quantity));
		}
		var b=document.getElementById("total");
		b.innerHTML="&nbsp;"+numberComma(Math.round(total / 10000) * 10000)+" L.L.";
		if(total==0)
		{
			var f=document.getElementById("order");
			f.style.display="none";
			var l=document.getElementById("logo");
			l.style.marginLeft="7.5vw";
		}
		else 
		{
			var f=document.getElementById("order");
			f.style.display="block";
			var l=document.getElementById("logo");
			l.style.marginLeft="13vw";
		}
		var items=document.getElementById("items");
		items.innerHTML=""+mycart.length;
		if(mycart.length>99)items.style.marginLeft="-4.2vw";
		else if(mycart.length>9)items.style.marginLeft="-3.55vw";
		else items.style.marginLeft="-3vw";
		saveDictionary();
		return Math.round(total / 10000) * 10000;
	}
}
function removeSpecialChars(originalText) 
{
    const cleanedText = originalText.replace(/[,":(){}]/g, '');
    return cleanedText;
}
function numberComma(number)
{
	var result="";
	var count=0;
	if(number.length<=3)result=""+number;
	else
	{
		result="";
		var txt=""+number;
		for(let i=txt.length-1;i>=0;i--)
		{
			if(count==3)
			{
				result=","+result;
				count=0;
			}
			result=txt.charAt(i)+result;
			count++;
		}
	}
	return result;
}
