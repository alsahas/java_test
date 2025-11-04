var maintenance=false;
function checkMaintenance()
{
	var nav = document.getElementById("topnav");
	var button = document.getElementById("button");
	var fix = document.getElementById("maintenance");
	
	if(maintenance)
	{
		nav.style.display = "none";
		button.style.display = "none";
		fix.style.display = "block";
	}
	else
	{
		//distributeCategories();
		disableButton();
	}
}
function changeImage2()
{
	document.getElementById("form").src="png/deliver2.png";
}
function changeImage1()
{
	document.getElementById("form").src="png/deliver.png";
}
function setValue()
{
	document.getElementById("customername").innerHTML=document.getElementById("name").value;
	document.getElementById("phonenumber").innerHTML=fix(document.getElementById("phone1").value)+"/"+fix(document.getElementById("phone2").value);
	document.getElementById("address").innerHTML=document.getElementById("address2").value;
}
function getValue()
{
	var cus=document.getElementById("customername").innerHTML;
	var pho=document.getElementById("phonenumber").innerHTML;
	var add=document.getElementById("address").innerHTML;
	var txt="alsaha314\n"+updateTotal()+"\n"+cus+"\n"+pho+"\n"+add+"\n";
	for (let i = 0; i < mycart.length; i++)
	{
		const prod = mycart[i];
		txt+=prod.id+":"+prod.quantity+"\n";
	}
	document.getElementById("subject").value="alsaha313";
	document.getElementById("message").value=txt+"alsaha315";
	return txt;
}
function fix(number)
{
	var fixed="";
	var cod=-1;
	for (let i = 0; i < number.length; i++)
	{
		cod=number[i].charCodeAt(0);
		if(cod>=1632&&cod<=1641)
		{
			if(cod==1632)fixed+="0";
			else if(cod==1633)fixed+="1";
			else if(cod==1634)fixed+="2";
			else if(cod==1635)fixed+="3";
			else if(cod==1636)fixed+="4";
			else if(cod==1637)fixed+="5";
			else if(cod==1638)fixed+="6";
			else if(cod==1639)fixed+="7";
			else if(cod==1640)fixed+="8";
			else if(cod==1641)fixed+="9";
		}
		else fixed+=number[i];
	}
	return fixed;
}
function isArabicDigit(chr) 
{
	//alert(chr.charCodeAt(0)+"hello");		1632-1641	<=>	0 to 9 in arabic
	var arabic = /[\u0660-\u0669]/;
	return(arabic.test(chr));
}
function disableButton()
{
	document.getElementById("button1").disabled = true;
}
function emptyPhone()
{
	document.getElementById("phone1").value="";
	document.getElementById("phone2").value="";
}
function emptyPhone1()
{
	document.getElementById("phone1").value="";
}
function emptyPhone2()
{
	document.getElementById("phone2").value="";
}
function checkPhone()
{
	var p1=document.getElementById("phone1");
	if(!p1.value)p1.focus();
}
function checkPhone1()
{
	var p1=document.getElementById("phone1");
	var p2=document.getElementById("phone2");
	filterDigit(p1,1);
	if(p1.value.length==2)p2.focus();

}
function checkPhone2()
{
	var p2=document.getElementById("phone2");
	var addr=document.getElementById("address2");
	filterDigit(p2,2);
	if(p2.value.length==6)addr.focus();
}
function checkGoodName(element)
{
	var p=document.getElementById(element);
	if(p.value.length>0)p.style="border: 2px solid #00cc0c;border-radius:3px;font-size:1rem;width:60%;height:35px;";
	else p.style="border: 2px solid #ff1100;border-radius:3px;font-size:1rem;width:60%;height:35px;";
}
function checkGood1()
{
	var p1=document.getElementById("phone1");
	if(p1.value.length==2)p1.style="border: 2px solid #00cc0c;border-radius:3px;font-size:1rem;width:20%;height:35px;";
	else p1.style="border: 2px solid #ff1100;border-radius:3px;font-size:1rem;width:20%;height:35px;";
}
function checkGood2()
{
	var p2=document.getElementById("phone2");
	if(p2.value.length==6)p2.style="border: 2px solid #00cc0c;border-radius:3px;font-size:1rem;width:36.5%;height:35px;";
	else p2.style="border: 2px solid #ff1100;border-radius:3px;font-size:1rem;width:36.5%;height:35px;";
}
function checkSubmit()
{
	var p1=document.getElementById("name");
	var p2=document.getElementById("phone1");
	var p3=document.getElementById("phone2");
	var p4=document.getElementById("address2");
	if(p1.value.length>0&&p2.value.length==2&&p3.value.length==6&&p4.value.length>0)
	{
		document.getElementById("button1").disabled = false;
	}
	else
	{
		document.getElementById("button1").disabled = true;
	}
}
function filterDigit(element,mark)
{
	var text=element.value;
	var newText="";
	if(text.length>0)
	{
		for (let i = 0; i < text.length; i++)
		{
			if(isArabicDigit(text[i]))newText+=text[i];
			else if(Number(text[i])||text[i]=="0")newText+=text[i];
		}
		element.value=newText;
		if(mark==2&&newText.length>6)element.value=newText.substring(0,6);
	}
}
function distribute(cat)
{
	document.getElementById('inputsearch').value="";
	document.getElementById('numberitems').innerHTML="";

	var page=document.getElementById("page");
	page.innerHTML="";
	const topnav=document.querySelectorAll("#topnav a[href]");
	for(let j=0;j<topnav.length;j++)topnav[j].className="";
	document.getElementById(cat).className="active";
	
	for (let i = 0; i < products.length; i++) 
	{
		const product = products[i];
		
		if(cat==product.category)
		{
		/*simulation	
		<div class="container">
			<a href="javascript:addProductToCart('product1',29000);"><img class="image" src="png/products/product3.png" width=100 height=100></a>
			<a href="javascript:removeProductFromCart('product1');"><img id="cartproduct1"class="cart" style="display:none;"src="png/cart.png" width=100 height=100></a>
			<p id="imagename"class="imagename">name</p>
			<p class="overlay"id="overlay" style="font-size:0.8rem;">120,000 L.L.</p>
		</div>

		*/
			var div= document.createElement("div");
			div.className="container";
			
			let vision="";
			if(existInMyCart(product.name))vision="block";
			else vision="none";
			
			var p=document.createElement("p");
			p.className="imagename";
			p.style="font-size:21px;white-space: nowrap;";
			p.innerHTML=product.name;
			
			var p2=document.createElement("p");
			p2.className="overlay";
			p2.id="overlay";
			p2.style="font-size:21px;white-space: nowrap;";
			p2.innerHTML=numberComma(product.price)+" L.L.";
			
			div.append(p);
			page.append(div);
			let w=p.clientWidth;
			w-=100;
			if(w>0)w=parseInt(w/2);
			else w=0;
			
			var a=document.createElement("a");
			a.href="javascript:addProductToCart("+product.id+",'"+product.name+"',"+product.price+","+product.pngExist+");";
			if(product.pngExist)a.innerHTML="<img class='image' src='png/products/"+product.id+".png' width=100 height=100>";
			else a.innerHTML="<img class='image' src='png/products/0.png' width=100 height=100>";
			
			var a2=document.createElement("a");
			a2.href="javascript:removeProductFromCart('"+product.name+"',"+product.price+");";
			a2.innerHTML="<img id='cart"+product.name+"' class='cart' style='left:"+w+"px;display:"+vision+"'src='png/cart.png'>";
			
			div.append(a);
			div.append(a2);
			div.append(p);
			div.append(p2);
			page.append(div);
		}
	}
}
function distributeAll()
{
	var page=document.getElementById("page");
	page.innerHTML="";
	const topnav=document.querySelectorAll("#topnav a[href]");
	for(let j=0;j<topnav.length;j++)topnav[j].className="";
	if(document.getElementById('inputsearch').value.length==0)
	{
		document.getElementById('numberitems').innerHTML="";
	}
	else
	{
		var items=0;
		for (let i = 0; i < products.length; i++) 
		{
			const product = products[i];
			if(products[i].name.toLowerCase().includes(document.getElementById('inputsearch').value.toLowerCase()))
			{
				items++;
				var div= document.createElement("div");
				div.className="container";
				
				let vision="";
				if(existInMyCart(product.name))vision="block";
				else vision="none";
				
				var p=document.createElement("p");
				p.className="imagename";
				p.style="font-size:21px;white-space: nowrap;";
				p.innerHTML=product.name;
				
				var p2=document.createElement("p");
				p2.className="overlay";
				p2.id="overlay";
				p2.style="font-size:21px;white-space: nowrap;";
				p2.innerHTML=numberComma(product.price)+" L.L.";
				
				div.append(p);
				page.append(div);
				let w=p.clientWidth;
				w-=100;
				if(w>0)w=parseInt(w/2);
				else w=0;
				
				var a=document.createElement("a");
				a.href="javascript:addProductToCart("+product.id+",'"+product.name+"',"+product.price+","+product.pngExist+");";
				if(product.pngExist)a.innerHTML="<img style=position:relative;left:"+w+"px;class='image' src='png/products/"+product.id+".png' width=100 height=100>";
				else a.innerHTML="<img style=position:relative;left:"+w+"px;class='image' src='png/products/0.png' width=100 height=100>";
				
				var a2=document.createElement("a");
				a2.href="javascript:removeProductFromCart('"+product.name+"',"+product.price+");";
				a2.innerHTML="<img id='cart"+product.name+"' class='cart' style='left:"+w+"px;display:"+vision+"'src='png/cart.png'>";
				
				div.append(a);
				div.append(a2);
				div.append(p);
				div.append(p2);
				page.append(div);
			}
			document.getElementById('numberitems').innerHTML="items found : "+items;

		}
	}
}
function loadCategories()
{
	var topnav=document.getElementById("category");
	if(topnav!=null)
	{
		topnav.innerHTML="";
		get(child(dbref,"categories")).then((snapshot) => 
		{
	console.log("okk");
			if (snapshot.exists()) 
			{
				const data = snapshot.val();
				const keys = Object.keys(data);
				let i = 0;
				while (i < keys.length) 
				{
					const key = keys[i];
					const item = data[key];
					var a= document.createElement("a");
					a.id=""+item.category;
					a.onclick="distribute('"+item.category+"')";
					a.href="javascript:distribute('"+item.category+"');";
					a.innerHTML=item.category;
					topnav.append(a);
					i++;
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
function distributeCategories()
{
	/*if((document.documentElement.clientWidth/document.documentElement.clientHeight)<0.62)
	{
		document.documentElement.requestFullscreen();
		screen.orientation.lock('landscape').catch((e) => alert(e));
	}*/
	var topnav=document.getElementById("myCategories");
	for (let i = 0; i < categories.length; i++)
	{
		const category = categories[i];
		var a= document.createElement("a");
		a.id=""+category.name;
		a.onclick="distribute('"+category.name+"')";
		a.href="javascript:distribute('"+category.name+"');";
		a.innerHTML=category.name;
		topnav.append(a);
	}
	var form=document.getElementById("form");
	form.style.left=(document.getElementById("My CART").offsetWidth-form.offsetWidth)+"px";
}
function distributeMyCart()
{
	document.getElementById('inputsearch').value="";
	document.getElementById('numberitems').innerHTML="";
	var page=document.getElementById("page");
	page.innerHTML="";
	const sidebars=document.querySelectorAll("#topnav a[href]");
	for(let j=0;j<sidebars.length;j++)sidebars[j].className="";
	document.getElementById('My CART').className="active";
	if(mycart.length==0)
	{
		var div= document.createElement("div");
		div.className="container";
		
		var p=document.createElement("p");
		p.innerHTML="YOUR CART IS EMPTY PLEASE SELECT PRODUCTS";
		
		div.append(p);
		
		page.append(div);
	}
	else
	{
/*
	<div class="container">
		<img class="prod"width="100"height="100"src="png/products/product2.png">
		<a href="javascript:plus('1');"><img class="plus" src="png/plus.png" width=20 height=20></a>
		<a href="javascript:minus('1');"><img class="minus" src="png/minus.png" width=20 height=20></a>
		<a href="javascript:remove('1');"><img class="remove" src="png/delete.png" width=25 height=25></a>
		<a href="javascript:quantity('product');"><p id="quantity"class="quantity">1</p></a>
		<p id="quantity"class="quantity">1</p>
		<p id="imagename"class="iamgename">name</p>
		<p id="product2"class="overlay">150,000,000 L.L.</p>
	</div>

*/	
		for (let i = 0; i < mycart.length; i++) 
		{
			const product = mycart[i];
		
			//<div class="container">
			var div= document.createElement("div");
			div.className="container";
			
			//<img class="prod"width="100"height="100"src="png/products/product2.png">
			var img = document.createElement("img");
			img.className="prod";
			img.width="100";
			img.height="100";
			if(product.pngExist)img.src = "png/products/"+product.id+".png";
			else img.src = "png/products/0.png";
			div.append(img);
			
			//<a href="javascript:plus('1');"><img class="plus" src="png/plus.png" width=20 height=20></a>
			var a=document.createElement("a");
			a.href="javascript:plus('"+product.name+"');";
			a.innerHTML="<img class='plus'width='20'height='20'src='png/plus.png'>";
			div.append(a);
			
			//<a href="javascript:minus('1');"><img class="minus" src="png/minus.png" width=20 height=20></a>
			a=document.createElement("a");
			a.href="javascript:minus('"+product.name+"');";
			a.innerHTML="<img class='minus'width='20'height='20'src='png/minus.png'>";
			div.append(a);

			//<a href="javascript:remove('1');"><img class="remove" src="png/delete.png" width=25 height=25></a>
			a=document.createElement("a");
			a.href="javascript:remove('"+product.name+"');";
			a.innerHTML="<img class='remove'width='25'height='25'src='png/delete.png'>";
			div.append(a);

			//<a href="javascript:quantity('product');"><p id="quantity"class="quantity">1</p></a>
			a=document.createElement("a");
			a.href="javascript:quantity('quantity"+product.name+"');";
			a.innerHTML="<p id='quantity"+product.name+"'class='quantity'>&nbsp&nbsp"+product.quantity+"&nbsp&nbsp</p>";
			div.append(a);
			
			//<p id="imagename"class="imagename">name</p>
			p=document.createElement("p");
			p.className="imagename";
			p.style="font-size:21px;white-space: nowrap;";
			p.innerHTML=product.name;
			div.append(p);
			
			//<p id="product2"class="overlay">150,000,000 L.L.</p>
			p=document.createElement("p");
			p.id=product.name;
			p.style="font-size:21px;white-space: nowrap;";
			p.className="overlay";
			p.innerHTML=numberComma(product.price*product.quantity)+" L.L.";
			div.append(p);
			
			page.append(div);
		}
		updateTotal;
		window.scrollTo(0,0);
	}
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
}
function plus(idd,nom,pr,exist)
{
	var q;
	var dict=[];
	let found=false;
	for (let i = 0; i < mycart.length;i++) 
	{
		const product = mycart[i];
		if(product.name==nom)
		{
			mycart[i].quantity++;
			q=document.getElementById("quantity"+name);
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
		dict.push(row);
		mycart = dict.slice();
	}
	//distributeMyCart();
	saveDictionary();
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
	saveDictionary();
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
	saveDictionary();
	updateTotal();
}
function addProductToCart(idd,nom,pr,exist)
{
	var dict = [];
	let found=false;
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
	updateTotal();
}
function quantity(prodname)
{
	let quantvalue=document.getElementById(prodname).innerHTML;
	let quantity = prompt("Please enter quantity to product:"+prodname.substring(8,prodname.length), quantvalue.substring(12,quantvalue.length-12));
	quantity=quantity.trim();
	if(quantity=="")
	{
		alert("Empty Value Not Allowed !!!");
	}
	else if (quantity != null && !isNaN(quantity)) 
	{
		if(Number(quantity)>0)
		{
			updateMyCartQuantity(prodname.substring(8,prodname.length),parseInt(quantity));
			document.getElementById(prodname).innerHTML ="&nbsp&nbsp"+parseInt(quantity)+"&nbsp&nbsp";
			document.getElementById(prodname.substring(8,prodname.length)).innerHTML =numberComma(getPriceMyCart(prodname.substring(8,prodname.length))*parseInt(quantity))+" L.L.";
		}	
		else alert("You Must Enter Number Greater Than Zero !!!");
	}
	else
	{
		alert("Only Numbers is Allowed !!!");
	}
}
function getPhone()
{
	let phone = prompt("Please enter your phone number:must be of 8 digits e.g. 76123456");
	phone=phone.trim();
	if(phone=="")
	{
		alert("Empty Value Not Allowed !!!");
	}
	else if (phone != null && !isNaN(phone)) 
	{
		if(Number(phone)>0&&phone.length==8)
		{
			document.getElementById("phonenumber").innerHTML=phone;
			getCustomerName();
		}	
		else alert("You Must Enter Number of 8 digits !!!");
	}
	else
	{
		alert("Only Numbers is Allowed !!!");
	}
}
function getCustomerName()
{
	let customer = prompt("Please enter your name");
	customer=customer.trim();
	if(customer=="")
	{
		alert("Empty Value Not Allowed !!!");
	}
	else if (customer.length<30) 
	{
		document.getElementById("customername").innerHTML=customer;
		getAddress();
	}
	else
	{
		alert("Name is too long must be less than 30 !!!");
	}
}
function getAddress()
{
	let address = prompt("Please enter your address");
	address=address.trim();
	if(address=="")
	{
		alert("Empty Value Not Allowed !!!");
	}
	else if (address.length<60) 
	{
		document.getElementById("address").innerHTML=address;
		getValue();
		document.form.submit();
	}
	else
	{
		alert("Address is too long must be less than 60 !!!");
	}
}
function removeProductFromCart(nom,pr)
{
	var dict = [];
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==nom)
		{
		}
		else dict.push(mycart[i]);
	}
	mycart = dict.slice();
	document.getElementById("cart"+nom).style.display = "none";
	updateTotal();
}
function updateTotal()
{
	let total=0;
	for (let i = 0; i < mycart.length; i++) 
	{
		total+=mycart[i].price*mycart[i].quantity;
	}
	var b=document.getElementById("total");
	b.innerHTML="&nbsp;"+numberComma(total)+" L.L.";
	if(mycart.length==0)
	{
		var f=document.getElementById("form");
		f.style.display="none";
	}
	else 
	{
		var f=document.getElementById("form");
		f.style.display="block";
	}
	return total;
}
function updateMyCartQuantity(name,quant)
{
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==name)mycart[i].quantity=quant;
	}
	updateTotal();
}
function getPriceMyCart(name)
{
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==name)return mycart[i].price;
	}
}
function existInMyCart(nom)
{
	let exist=false;
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==nom)exist=true;
	}
	return exist;
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
let mycart =
[
/*  { name: 'product7',quantity:1, price: 40000 },
  { name: 'product8',quantity:2, price: 45000 }*/
];
document.addEventListener('DOMContentLoaded',loadDictionary);
