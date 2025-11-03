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
let mycart =
[
/*  { name: 'product7',quantity:1, price: 40000 },
  { name: 'product8',quantity:2, price: 45000 }*/
];
function calibrateForm()
{
	var nav = document.getElementById("topnav");
	var form=document.getElementById("form");
	if(nav.style.display !== "none")
	form.style.left=(document.getElementById("My CART").offsetWidth-form.offsetWidth)+"px";
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
		window.scrollTo(0, 0);
	}
}
function plus(name)
{
	var q;
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==name)
		{
			mycart[i].quantity++;
			q=document.getElementById("quantity"+name);
			q.innerHTML="&nbsp&nbsp"+mycart[i].quantity+"&nbsp&nbsp";
		}
	}
	//distributeMyCart();
	updateTotal();
	calibrateForm();
}
function minus(name)
{
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==name)
		{
			if(product.quantity>1)
			{
				mycart[i].quantity--;
				q=document.getElementById("quantity"+name);
				q.innerHTML="&nbsp&nbsp"+mycart[i].quantity+"&nbsp&nbsp";
			}	
		}
	}
	//distributeMyCart();
	updateTotal();
	calibrateForm();
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
	distributeMyCart();
	updateTotal();
	calibrateForm();
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
		let row={id:idd,name:nom,quantity:1,price:pr,pngExist:exist};
		dict.push(row);
		mycart = dict.slice();
		document.getElementById("cart"+nom).style.display = "block";
	}
	updateTotal();
	calibrateForm();
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
	calibrateForm();
}
function updateTotal()
{
	let total=0;
	for (let i = 0; i < mycart.length; i++) 
	{
		total+=mycart[i].price*mycart[i].quantity;
	}
	var b=document.getElementById("total");
	b.innerHTML=" Bill: "+numberComma(total)+" L.L.";
	var b2=document.getElementById("total2");
	b2.innerHTML="= "+numberComma(total+50000)+" L.L.";
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
const categories=
[
{ name: 'Õ»Ê»'},
{ name: '√⁄‘«»'},
{ name: '»·«” ÌﬂÌ« '},
{ name: 'ﬁ·Ê»« '},
{ name: '„Ê«œ √Ê·Ì…'},
{ name: '”ﬂ«ﬂ—'},
{ name: '»“Ê—« '},
{ name: '√·»«‰'},
{ name: '√Ã»«‰'},
{ name: '„Ê«œ €–«∆Ì…'},
{ name: '„‘—Ê»« '},
{ name: '„‰Ÿ›« '},
{ name: '„Ê«œ √Œ—Ï'},
{ name: '„Ì«Â'},
{ name: 'œŒ«‰'}
];
const products=
[
{ id: 1,name:'’·’… Ì„«„… 660€',category:'„Ê«œ €–«∆Ì…',price:170000,pngExist:1},
{ id: 3,name:'“ÂÊ—«  «·⁄ÿ«—…«·ﬂ—ﬂœÌÂ',category:'√⁄‘«»',price:80000,pngExist:1},
{ id: 4,name:'“ÂÊ—«  «·⁄ÿ«—… Œ „·Ì‰…',category:'√⁄‘«»',price:80000,pngExist:1},
{ id: 5,name:'“ÂÊ—«  «·⁄ÿ«—… „Ê—ÌÃ‰«',category:'√⁄‘«»',price:80000,pngExist:1},
{ id: 6,name:'“ÂÊ—«  «·⁄ÿ«—… “ ‘«„Ì…',category:'√⁄‘«»',price:80000,pngExist:1},
{ id: 7,name:'“ÂÊ—«  «·⁄ÿ«—… “‰Ã»Ì· Ê⁄”·',category:'√⁄‘«»',price:80000,pngExist:1},
{ id: 8,name:'“ÂÊ—«  «·⁄ÿ«—… »«»Ê‰Ã',category:'√⁄‘«»',price:80000,pngExist:1},
{ id: 9,name:'“ÂÊ—«  «·⁄ÿ«—… ﬂ„Ê‰ Ê·Ì„Ê‰',category:'√⁄‘«»',price:80000,pngExist:1},
{ id: 11,name:'ﬂ«—ÌÊﬂ« 400€—«„',category:'„Ê«œ €–«∆Ì…',price:620000,pngExist:1},
{ id: 13,name:'„⁄ÃÊ‰ €«œ…Õ·«ﬁ…',category:'„‰Ÿ›« ',price:90000,pngExist:1},
{ id: 15,name:'jordina panda',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 16,name:'jordina choco cake',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 17,name:'jordina super roll',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 22,name:'„ÌÊ‰Ì“ ÊÌ  »· 1000„·',category:'„Ê«œ €–«∆Ì…',price:390000,pngExist:1},
{ id: 23,name:'„ÌÊ‰Ì“ ÊÌ  »· 500„·',category:'„Ê«œ €–«∆Ì…',price:180000,pngExist:1},
{ id: 25,name:'œÊ„Ì‰€Ê 200 €—«„',category:'„Ê«œ €–«∆Ì…',price:250000,pngExist:1},
{ id: 26,name:'œÊ„Ì‰€Ê 400€—«„',category:'„‘—Ê»« ',price:555000,pngExist:1},
{ id: 27,name:'“Ì  ”ÌœÌ Â‘«„ 1 ·Ì —',category:'„Ê«œ €–«∆Ì…',price:495000,pngExist:1},
{ id: 28,name:'“Ì  ”ÌœÌ Â‘«„ 2 ·Ì —',category:'„Ê«œ €–«∆Ì…',price:980000,pngExist:1},
{ id: 32,name:'“Ì  «·Ê“Ì— 3·Ì —',category:'„Ê«œ €–«∆Ì…',price:1800000,pngExist:1},
{ id: 35,name:'«ÿ·” „Õ«—„',category:'„Ê«œ √Œ—Ï',price:80000,pngExist:1},
{ id: 39,name:'”Ì› Œ‘‰',category:'„‰Ÿ›« ',price:100000,pngExist:1},
{ id: 42,name:'‘Ê—»«  «Ã œÃ«Ã',category:'„Ê«œ €–«∆Ì…',price:40000,pngExist:1},
{ id: 43,name:'ﬁÿ‰ «–‰Ì‰',category:'„Ê«œ √Œ—Ï',price:20000,pngExist:1},
{ id: 44,name:'œ—Ì‰« „«‰€« Ÿ—›',category:'„Ê«œ €–«∆Ì…',price:20000,pngExist:1},
{ id: 45,name:'œ—Ì‰« Ÿ—› Ê—œ',category:'„Ê«œ €–«∆Ì…',price:20000,pngExist:1},
{ id: 46,name:'œ—Ì‰« Ÿ—› ›—Ì“',category:'„Ê«œ €–«∆Ì…',price:20000,pngExist:1},
{ id: 47,name:'œ—Ì‰« Ÿ—›  Ê ',category:'„Ê«œ €–«∆Ì…',price:20000,pngExist:1},
{ id: 48,name:'œ—Ì‰« Ÿ—› «‰«‰«”',category:'„Ê«œ €–«∆Ì…',price:20000,pngExist:1},
{ id: 49,name:'œ—Ì‰« Ÿ—› «·€Ê«›…',category:'„Ê«œ €–«∆Ì…',price:20000,pngExist:1},
{ id: 50,name:'œ—Ì‰« Ÿ—›  —Ê»Ìﬂ«·',category:'„Ê«œ €–«∆Ì…',price:20000,pngExist:1},
{ id: 51,name:'œ—Ì‰« Ÿ—› »— ﬁ«·',category:'„Ê«œ €–«∆Ì…',price:20000,pngExist:1},
{ id: 53,name:'ﬁ‘ﬁÊ«‰ —Ê‰«300€—«„',category:'√Ã»«‰',price:300000,pngExist:1},
{ id: 54,name:'„ÌÊ‰Ì“ ÂÊ·ÌœÌ ’€Ì—',category:'„Ê«œ €–«∆Ì…',price:70000,pngExist:1},
{ id: 55,name:'coffee creamer400g',category:'„Ê«œ €–«∆Ì…',price:110000,pngExist:1},
{ id: 57,name:'«Êœﬂ” 1200„·',category:'„‰Ÿ›« ',price:95000,pngExist:1},
{ id: 59,name:'»—Ì·600„·',category:'„‰Ÿ›« ',price:85000,pngExist:1},
{ id: 60,name:'œÊ„ Ì 250€—«„',category:'√Ã»«‰',price:60000,pngExist:1},
{ id: 64,name:'rambo',category:'„‰Ÿ›« ',price:245000,pngExist:1},
{ id: 67,name:' Ê‰« deroniÕ—',category:'„Ê«œ €–«∆Ì…',price:135000,pngExist:1},
{ id: 68,name:' Ê‰ deroni ',category:'„Ê«œ €–«∆Ì…',price:135000,pngExist:1},
{ id: 70,name:'«Êœﬂ” €«·Ê‰4ﬂ',category:'„‰Ÿ›« ',price:315000,pngExist:1},
{ id: 74,name:'«‰œÊ„Ì 75€',category:'„Ê«œ €–«∆Ì…',price:30000,pngExist:1},
{ id: 77,name:'«‰œÊ„Ì ﬂ«—Ì 75€',category:'„Ê«œ €–«∆Ì…',price:25000,pngExist:1},
{ id: 80,name:'ﬂ ‘» xtra 2.2;',category:'„Ê«œ €–«∆Ì…',price:300000,pngExist:1},
{ id: 83,name:'»—«Ì› 9 ÿÊÌ·  ',category:'„Ê«œ √Œ—Ï',price:90000,pngExist:1},
{ id: 84,name:'»—Ì›  8',category:'„Ê«œ √Œ—Ï',price:60000,pngExist:1},
{ id: 86,name:'„„«”Õ «—÷',category:'„‰Ÿ›« ',price:45000,pngExist:1},
{ id: 87,name:'·Ì› «” Õ„«„',category:'„‰Ÿ›« ',price:85000,pngExist:1},
{ id: 88,name:'„⁄ﬂ—Ê‰… reggia',category:'„Ê«œ €–«∆Ì…',price:45000,pngExist:1},
{ id: 91,name:'Õ„’ „ÿÕÊ‰',category:'„Ê«œ €–«∆Ì…',price:60000,pngExist:1},
{ id: 92,name:'»«“Ì·« ‘ Ê—« ’€Ì—',category:'„Ê«œ €–«∆Ì…',price:55000,pngExist:1},
{ id: 93,name:'„·Õ pearl',category:'„Ê«œ €–«∆Ì…',price:20000,pngExist:1},
{ id: 94,name:'»«“Ì·« ‘ Ê—«850 €—«„ ',category:'„Ê«œ €–«∆Ì…',price:110000,pngExist:1},
{ id: 95,name:'›Ê· ‘ Ê—«850',category:'„Ê«œ €–«∆Ì…',price:110000,pngExist:1},
{ id: 96,name:'›Ê· ‘ Ê—« 400€—«„',category:'„Ê«œ €–«∆Ì…',price:50000,pngExist:1},
{ id: 97,name:'›Ê· „⁄ Õ„’ ‘ Ê—« 400 €—«„',category:'„Ê«œ €–«∆Ì…',price:55000,pngExist:1},
{ id: 98,name:'Õ„’ Õ» ‘ Ê—«',category:'„Ê«œ €–«∆Ì…',price:65000,pngExist:1},
{ id: 99,name:'›Ê· „⁄ Õ„’ ‘ Ê—« 600 €—«„',category:'„Ê«œ €–«∆Ì…',price:75000,pngExist:1},
{ id: 100,name:'›Ê· ‘ Ê—« 600€—«„',category:'„Ê«œ €–«∆Ì…',price:75000,pngExist:1},
{ id: 102,name:'ﬁœ«Õ… ›Ê‰Ìﬂ”',category:'œŒ«‰',price:25000,pngExist:1},
{ id: 104,name:'„ÌÊ‰Ì“ dollys 250ml',category:'„Ê«œ €–«∆Ì…',price:125000,pngExist:1},
{ id: 106,name:'Â‰Ì… œÃ«Ã 1 ﬂ',category:'„Ê«œ €–«∆Ì…',price:180000,pngExist:1},
{ id: 107,name:'Â‰Ì… »ﬁ— 340€',category:'„Ê«œ €–«∆Ì…',price:90000,pngExist:1},
{ id: 108,name:'Â‰Ì… œÃ«Ã 340',category:'„Ê«œ €–«∆Ì…',price:90000,pngExist:1},
{ id: 110,name:'Â‰Ì… »ﬁ— 200€',category:'„Ê«œ €–«∆Ì…',price:65000,pngExist:1},
{ id: 111,name:'nutella630g',category:'„Ê«œ €–«∆Ì…',price:560000,pngExist:1},
{ id: 112,name:'nutella400€',category:'„Ê«œ €–«∆Ì…',price:350000,pngExist:1},
{ id: 113,name:'panino ',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 114,name:'›ÿ— ‘—«∆Õ glendy',category:'„Ê«œ €–«∆Ì…',price:60000,pngExist:1},
{ id: 136,name:'œ«—ﬂ »·Ê 1·Ì —',category:'„‘—Ê»« ',price:110000,pngExist:1},
{ id: 137,name:'”ﬂ— deroni',category:'„Ê«œ €–«∆Ì…',price:75000,pngExist:1},
{ id: 144,name:'»Ê„ »Ê„-250ml',category:'„‘—Ê»« ',price:80000,pngExist:1},
{ id: 152,name:'“Ì  bell food-5 ·Ì —',category:'„Ê«œ €–«∆Ì…',price:590000,pngExist:1},
{ id: 154,name:'œÊ„ Ì - 500 €—«„',category:'√Ã»«‰',price:115000,pngExist:1},
{ id: 161,name:'Ã»‰… ﬁ‘ﬁÊ«‰-—Ê‰« 600 €—«„',category:'√Ã»«‰',price:525000,pngExist:1},
{ id: 181,name:'»»”Ì 2250',category:'„‘—Ê»« ',price:135000,pngExist:1},
{ id: 182,name:'”›‰ «»2250',category:'„‘—Ê»« ',price:135000,pngExist:1},
{ id: 184,name:'»»”Ì 1250 „· ÃœÌœ',category:'„‘—Ê»« ',price:110000,pngExist:1},
{ id: 186,name:'”›‰1250',category:'„‘—Ê»« ',price:110000,pngExist:1},
{ id: 202,name:'”›‰ «» œ«Ì 330',category:'„‘—Ê»« ',price:50000,pngExist:1},
{ id: 221,name:'pipore',category:'„Ê«œ €–«∆Ì…',price:120000,pngExist:1},
{ id: 311,name:'jordina red',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 312,name:'jordina blue ',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 319,name:'ﬂ»«Ì«  eco',category:'»·«” ÌﬂÌ« ',price:60000,pngExist:1},
{ id: 342,name:'“Ì  «·Ê“Ì— 0.5·',category:'„Ê«œ €–«∆Ì…',price:390000,pngExist:1},
{ id: 351,name:'Õ·Ì» „ﬂÀ› dual1kg',category:'„Ê«œ €–«∆Ì…',price:225000,pngExist:1},
{ id: 376,name:'domo mug cakechoco',category:'„Ê«œ €–«∆Ì…',price:55000,pngExist:1},
{ id: 377,name:'domo mug cake choco karmel',category:'„Ê«œ €–«∆Ì…',price:55000,pngExist:1},
{ id: 378,name:'domo choco haz mug cake',category:'„Ê«œ €–«∆Ì…',price:55000,pngExist:1},
{ id: 379,name:'»”ﬂÊÌ  œÌÊ',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 386,name:'⁄·ﬂ… clorets«·‰⁄‰«⁄',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 388,name:'⁄·ﬂ… clorest ‰⁄‰«⁄ «’·Ì',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 390,name:'⁄·ﬂ… clorestﬁ—›…',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 394,name:'”ﬂÌ ·“ √Õ„—',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 400,name:'Ice Coffee Black',category:'„‘—Ê»« ',price:65000,pngExist:1},
{ id: 402,name:'M&M chocolate',category:'”ﬂ«ﬂ—',price:70000,pngExist:1},
{ id: 405,name:'«Ê“„Ê ﬂ·Ê» Õ»…',category:'”ﬂ«ﬂ—',price:65000,pngExist:1},
{ id: 406,name:'ozmo „—Â„',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 408,name:'«·»Ì·« »«” «',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 410,name:'«·»Ì·« ﬂÌﬂ',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 412,name:'albeni 30%',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 416,name:'albeni ﬂÌﬂ',category:'”ﬂ«ﬂ—',price:55000,pngExist:1},
{ id: 418,name:'albeni —Ê·',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 422,name:'ozmo »Ì÷…',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 424,name:'ozmo club',category:'”ﬂ«ﬂ—',price:65000,pngExist:1},
{ id: 427,name:'»—Ìﬂ œÌ·« ',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 440,name:'digestive choco',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 445,name:'damla ch',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 452,name:'⁄·ﬂ… „Ì‰ Ê” 3dp',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 453,name:'⁄·ﬂ… „Ì‰ Ê” 3d»',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 454,name:'„Ì‰ Ê” ice n',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 455,name:'„Ì‰ Ê” ice n2',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 456,name:'„Ì‰ Ê” ice r',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 460,name:'hanimeller',category:'”ﬂ«ﬂ—',price:45000,pngExist:1},
{ id: 461,name:'kombo',category:'”ﬂ«ﬂ—',price:45000,pngExist:1},
{ id: 462,name:'wafe up b',category:'”ﬂ«ﬂ—',price:110000,pngExist:1},
{ id: 466,name:'leo',category:'”ﬂ«ﬂ—',price:65000,pngExist:1},
{ id: 485,name:'·»‰ libanlait 1 kg',category:'√·»«‰',price:170000,pngExist:1},
{ id: 486,name:'·»‰ libanlait 2 kg',category:'√·»«‰',price:300000,pngExist:1},
{ id: 487,name:'candyup choc',category:'√·»«‰',price:35000,pngExist:1},
{ id: 488,name:'candy up fraise',category:'√·»«‰',price:35000,pngExist:1},
{ id: 489,name:'⁄Ì—«‰ ’€Ì—',category:'√·»«‰',price:50000,pngExist:1},
{ id: 494,name:'kinder joy p',category:'”ﬂ«ﬂ—',price:80000,pngExist:1},
{ id: 500,name:'metro 40%',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 508,name:'unica ',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 509,name:'unica black',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 510,name:'unica big',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 511,name:'yamama brownie',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 516,name:'granolies p',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 517,name:'granolies oreo',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 518,name:'granolies choco',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 524,name:'dabke original',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 525,name:'yan yan',category:'”ﬂ«ﬂ—',price:80000,pngExist:1},
{ id: 526,name:'mastro kappa',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 532,name:'nesquik',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 534,name:'no 1',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 538,name:'pringles 40g orignal',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 540,name:'pringles 40g sour and onion',category:'”ﬂ«ﬂ—',price:80000,pngExist:1},
{ id: 541,name:'pringles 40g hot and spicy',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 553,name:'ulker  kakaolu',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 554,name:'saklikoy',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 555,name:'toren cocoa',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 557,name:'toren strawberry',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 559,name:'maltesers',category:'”ﬂ«ﬂ—',price:70000,pngExist:1},
{ id: 564,name:'junior',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 565,name:'adicto ',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 567,name:'wafe up cocoa',category:'”ﬂ«ﬂ—',price:45000,pngExist:1},
{ id: 568,name:'wafe up strawberry',category:'”ﬂ«ﬂ—',price:45000,pngExist:1},
{ id: 569,name:'wafe up d choco',category:'”ﬂ«ﬂ—',price:55000,pngExist:1},
{ id: 571,name:'gofret kakaolu',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 574,name:'tuttifrutti',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 575,name:'kitkat',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 577,name:'ulker Ã«—Ê— «Õ„—',category:'”ﬂ«ﬂ—',price:80000,pngExist:1},
{ id: 581,name:'bounty ',category:'”ﬂ«ﬂ—',price:80000,pngExist:1},
{ id: 583,name:'mars',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 584,name:'twix',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 585,name:'laviva',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 588,name:'torku',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 591,name:'twins',category:'”ﬂ«ﬂ—',price:65000,pngExist:1},
{ id: 592,name:'biscolata duomax',category:'”ﬂ«ﬂ—',price:55000,pngExist:1},
{ id: 596,name:'break',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 607,name:'master ﬂ»Ì— Œ· Ê„·Õ',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 608,name:'master ﬂ»Ì— Õ«—',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 612,name:'master ﬂ»Ì— „·Õ',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 613,name:'master ﬂ»Ì— »«—»ﬂÌÊ ',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 616,name:'master sitos Ã»‰…',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 619,name:'master ﬂ»Ì— »›Ì“ ›” ﬁ',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 620,name:'unica ﬂÌ”',category:'”ﬂ«ﬂ—',price:120000,pngExist:1},
{ id: 634,name:'master »›Ì“ Ê”ÿ »Ê‘«—',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 635,name:'master »›Ì“ Ê”ÿ ›” ﬁ',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 641,name:'master Ê”ÿ Õ«—',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 643,name:'master Ê”ÿ »«—»ﬂÌÊ',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 644,name:'master „·Õ ÊŒ·',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 645,name:'master Ê”ÿ „·Õ',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 654,name:'olala sufle',category:'”ﬂ«ﬂ—',price:80000,pngExist:1},
{ id: 655,name:'Â«·Ì ⁄«∆·Ì',category:'”ﬂ«ﬂ—',price:180000,pngExist:1},
{ id: 657,name:'dark blue',category:'„‘—Ê»« ',price:45000,pngExist:1},
{ id: 678,name:'snips ’€Ì— Ã»‰… ›—‰”Ì…',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 679,name:'snips ﬂ»Ì— „·Õ',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 680,name:'snipsﬂ»Ì— Ã»‰… ›—‰”Ì…',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 681,name:'snips ﬂ»Ì— ⁄”· ÊŒ—œ·',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 682,name:'snips ﬂ»Ì— Œ· Ê„·Õ',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 691,name:'corn cobs30g',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 702,name:'„ﬂ⁄» „«ÃÌ',category:'„Ê«œ €–«∆Ì…',price:20000,pngExist:1},
{ id: 706,name:'ﬂÌ—Ì 6ﬁÿ⁄',category:'√Ã»«‰',price:130000,pngExist:1},
{ id: 712,name:'Ÿ—› ‰”ﬂ«›Ì ﬂ·«”Ìﬂ',category:'„Ê«œ €–«∆Ì…',price:20000,pngExist:1},
{ id: 718,name:'biskrem 50%',category:'”ﬂ«ﬂ—',price:70000,pngExist:1},
{ id: 723,name:'„” — ÃÊ”Ì180€ «‰«‰«”',category:'„‘—Ê»« ',price:15000,pngExist:1},
{ id: 724,name:'„” — ÃÊ”Ì »— ﬁ«· 180€',category:'„‘—Ê»« ',price:15000,pngExist:1},
{ id: 764,name:'·Ê“ ',category:'ﬁ·Ê»« ',price:1000000,pngExist:1},
{ id: 775,name:'«·Ì„«„… œ»” —„«‰300 „·',category:'„Ê«œ €–«∆Ì…',price:140000,pngExist:1},
{ id: 909,name:'7up 330ml  ‰ﬂ',category:'„‘—Ê»« ',price:60000,pngExist:1},
{ id: 953,name:' ·»‰ »·œÌ 5 kg  œÊ‰ ›—«€… ',category:'√·»«‰',price:330000,pngExist:1},
{ id: 955,name:'·»‰ »·œÌ  2 kg  ',category:'√·»«‰',price:180000,pngExist:1},
{ id: 956,name:'·»‰ »·œÌ  1 kg',category:'√·»«‰',price:100000,pngExist:1},
{ id: 957,name:'⁄·»… ·»‰… 0.5 ﬂ',category:'√·»«‰',price:70000,pngExist:1},
{ id: 958,name:'»“— „Ì«·',category:'»“Ê—« ',price:350000,pngExist:1},
{ id: 959,name:'»“— „’—Ì',category:'»“Ê—« ',price:380000,pngExist:1},
{ id: 961,name:'›” ﬁ',category:'»“Ê—« ',price:400000,pngExist:1},
{ id: 962,name:'ﬂ—ﬂ—Ì ',category:'»“Ê—« ',price:360000,pngExist:1},
{ id: 964,name:'»“— «»Ì÷',category:'»“Ê—« ',price:500000,pngExist:1},
{ id: 966,name:'»“— ‘„«„',category:'»“Ê—« ',price:500000,pngExist:1},
{ id: 967,name:'„Œ·Êÿ…',category:'»“Ê—« ',price:450000,pngExist:1},
{ id: 1012,name:'milka bubbly white',category:'”ﬂ«ﬂ—',price:120000,pngExist:1},
{ id: 1013,name:'milka oreo choco',category:'”ﬂ«ﬂ—',price:120000,pngExist:1},
{ id: 1014,name:'milka tuc',category:'”ﬂ«ﬂ—',price:120000,pngExist:1},
{ id: 1018,name:'”Ìœ—“ ﬂ— Ê‰ ›÷Ì',category:'œŒ«‰',price:70000,pngExist:1},
{ id: 1019,name:'”Ìœ—“ ﬂ— Ê‰ «“—ﬁ',category:'œŒ«‰',price:70000,pngExist:1},
{ id: 1020,name:'”Ìœ—“ ›÷Ì ÿÊÌ·',category:'œŒ«‰',price:70000,pngExist:1},
{ id: 1023,name:'ﬂ‰  «“—ﬁ',category:'œŒ«‰',price:150000,pngExist:1},
{ id: 1024,name:'ﬂ‰  ›÷Ì',category:'œŒ«‰',price:150000,pngExist:1},
{ id: 1025,name:'”Ìœ—“ ﬁœÌ„',category:'œŒ«‰',price:65000,pngExist:1},
{ id: 1027,name:'Œ»“ ﬁ·ﬁ«” ﬂ»Ì—',category:'„Ê«œ €–«∆Ì…',price:80000,pngExist:1},
{ id: 1028,name:' Œ»“ „‘ﬂ· ﬂ»Ì— ',category:'„Ê«œ €–«∆Ì…',price:75000,pngExist:1},
{ id: 1029,name:'skittels prple',category:'”ﬂ«ﬂ—',price:95000,pngExist:1},
{ id: 1033,name:'Œ»“ «·⁄’— ‘Ê›«‰ 6',category:'„Ê«œ €–«∆Ì…',price:75000,pngExist:1},
{ id: 1034,name:'Œ»“ «·⁄’— «”„— 8',category:'„Ê«œ €–«∆Ì…',price:60000,pngExist:1},
{ id: 1054,name:'kraker',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 1058,name:'ozmo popsy',category:'”ﬂ«ﬂ—',price:45000,pngExist:1},
{ id: 1073,name:'Ÿ—› torabika',category:'„‘—Ê»« ',price:20000,pngExist:1},
{ id: 1074,name:'jordina 3 s',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 1079,name:'albeni tane tane',category:'„‘—Ê»« ',price:60000,pngExist:1},
{ id: 1112,name:'Â«·Ì ”«‰œÊ‘',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 1113,name:'œÌÊ ﬂ«ﬂÊ',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 1117,name:'rulokat 9',category:'”ﬂ«ﬂ—',price:45000,pngExist:1},
{ id: 1119,name:'haylayf',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 1120,name:'lotus t',category:'”ﬂ«ﬂ—',price:130000,pngExist:1},
{ id: 1121,name:'skittels bite red',category:'”ﬂ«ﬂ—',price:95000,pngExist:1},
{ id: 1133,name:'ﬂ— Ê‰… »Ì÷ ﬂ»Ì—',category:'„Ê«œ €–«∆Ì…',price:270000,pngExist:1},
{ id: 1140,name:'ozmo cornee',category:'”ﬂ«ﬂ—',price:45000,pngExist:1},
{ id: 1146,name:'„·»Ê—Ê Ê—ﬁ «Õ„—',category:'œŒ«‰',price:230000,pngExist:1},
{ id: 1147,name:'„·»Ê—Ê Ê—ﬁ «»Ì÷',category:'œŒ«‰',price:200000,pngExist:1},
{ id: 1148,name:'„·»Ê—Ê touch',category:'œŒ«‰',price:155000,pngExist:1},
{ id: 1149,name:'„·»Ê—Ê ﬂ—›  «Õ„—',category:'œŒ«‰',price:135000,pngExist:1},
{ id: 1150,name:'„·»Ê—Ê ﬂ—›  «»Ì÷',category:'œŒ«‰',price:130000,pngExist:1},
{ id: 1151,name:'ÊÌ‰” Ê‰ «“—ﬁ compact',category:'œŒ«‰',price:125000,pngExist:1},
{ id: 1152,name:'Ê‰” Ê‰ —„«œÌ compact',category:'œŒ«‰',price:125000,pngExist:1},
{ id: 1153,name:'Ê‰” Ê‰ «“—ﬁ ·«Ì ',category:'œŒ«‰',price:190000,pngExist:1},
{ id: 1154,name:'Ê‰” Ê‰ ·«Ì  —›Ì⁄',category:'œŒ«‰',price:150000,pngExist:1},
{ id: 1155,name:'Ê‰‘” — Ê—ﬁ',category:'œŒ«‰',price:100000,pngExist:1},
{ id: 1156,name:'Ê‰‘” — ﬂ— Ê‰ ',category:'œŒ«‰',price:110000,pngExist:1},
{ id: 1157,name:'„«—·»Ê—Ê «Õ„— ﬂ— Ê‰',category:'œŒ«‰',price:230000,pngExist:1},
{ id: 1158,name:'„«—·»Ê—Ê «»Ì÷ ﬂ— Ê‰',category:'œŒ«‰',price:230000,pngExist:1},
{ id: 1159,name:'œ«›ÌœÊ› €Ê·œ',category:'œŒ«‰',price:250000,pngExist:1},
{ id: 1160,name:'œ«›ÌœÊ› «“—ﬁ «Ì›Ê·›',category:'œŒ«‰',price:130000,pngExist:1},
{ id: 1161,name:'œ«›ÌœÊ› «Õ„— «Ì›Ê·›',category:'œŒ«‰',price:130000,pngExist:1},
{ id: 1162,name:'«·Ì€‰” «“—ﬁ —›Ì⁄',category:'œŒ«‰',price:50000,pngExist:1},
{ id: 1164,name:'”Ìœ—“ ›÷Ì —›Ì⁄',category:'œŒ«‰',price:70000,pngExist:1},
{ id: 1165,name:'”Ìœ—“ «”Êœ —›Ì⁄',category:'œŒ«‰',price:75000,pngExist:1},
{ id: 1166,name:'”Ìœ—“ «“—ﬁ —›Ì⁄',category:'œŒ«‰',price:75000,pngExist:1},
{ id: 1171,name:'‰Œ·…  ›«Õ Ì‰',category:'œŒ«‰',price:180000,pngExist:1},
{ id: 1172,name:'„“«Ì« Õ«„÷ Ê‰⁄‰⁄',category:'œŒ«‰',price:110000,pngExist:1},
{ id: 1173,name:'„“«Ì«  ›«Õ Ì‰',category:'œŒ«‰',price:110000,pngExist:1},
{ id: 1174,name:'Œ·Ì· „«„Ê‰',category:'œŒ«‰',price:110000,pngExist:1},
{ id: 1183,name:'Œ»“ ’«Ã',category:'„Ê«œ €–«∆Ì…',price:70000,pngExist:1},
{ id: 1187,name:'€«·Ê‰ „Ì«Â «·’›«',category:'„Ì«Â',price:60000,pngExist:1},
{ id: 1188,name:'€«·Ê‰ „Ì«Â ten',category:'„Ì«Â',price:110000,pngExist:1},
{ id: 1193,name:'pik one candy peanut',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 1241,name:'›Õ„ ›· ',category:'œŒ«‰',price:380000,pngExist:1},
{ id: 1255,name:' ‰Ê— «·⁄’— ‘Ê›«‰',category:'„Ê«œ €–«∆Ì…',price:60000,pngExist:1},
{ id: 1260,name:'davidoff silver',category:'œŒ«‰',price:130000,pngExist:1},
{ id: 1261,name:'nakhlaﬂ›',category:'œŒ«‰',price:860000,pngExist:1},
{ id: 1262,name:'tofiluk',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 1267,name:'gandour lucky555',category:'”ﬂ«ﬂ—',price:10000,pngExist:1},
{ id: 1268,name:'„” — ÃÊ”Ì ’ ›—Ì“ Ê„Ê“',category:'„‘—Ê»« ',price:15000,pngExist:1},
{ id: 1269,name:'„” — ÃÊ”Ì  ›«Õ ’€Ì—',category:'„‘—Ê»« ',price:15000,pngExist:1},
{ id: 1270,name:'„” — ÃÊ”Ì „«‰€Ê ’€Ì—',category:'„‘—Ê»« ',price:15000,pngExist:1},
{ id: 1271,name:'€›»·«',category:'„Ê«œ €–«∆Ì…',price:75000,pngExist:1},
{ id: 1273,name:'damla sour belt',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 1290,name:'œŒ«‰ œÌ›ÌœÊ› «»Ì÷ —›Ì⁄',category:'œŒ«‰',price:255000,pngExist:1},
{ id: 1307,name:'cudbury oroe',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 1351,name:'alpella nuga bar 35g',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 1365,name:'halley beyaz cikolatali',category:'”ﬂ«ﬂ—',price:160000,pngExist:1},
{ id: 1371,name:'milka Õ·Ì»',category:'”ﬂ«ﬂ—',price:110000,pngExist:1},
{ id: 1384,name:'adicto intense',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 1390,name:'kinder country',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 1392,name:'mentos orange ice',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 1395,name:'mentos rule ‰⁄‰«⁄ ',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 1398,name:'wafe up',category:'”ﬂ«ﬂ—',price:105000,pngExist:1},
{ id: 1399,name:'piko chocolate',category:'„‘—Ê»« ',price:30000,pngExist:1},
{ id: 1406,name:'rim 1.5l',category:'„Ì«Â',price:30000,pngExist:1},
{ id: 1407,name:'eti gold',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 1431,name:'pik one ch',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 1456,name:'ÿ—»Ê‘ €‰œÊ— *4',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 1466,name:'roshen cocoa',category:'√Ã»«‰',price:55000,pngExist:1},
{ id: 1489,name:'ﬂÌﬂ «Ê·«·« ”Ê›·Ì ',category:'”ﬂ«ﬂ—',price:80000,pngExist:1},
{ id: 1500,name:'master sitos Ã»‰…„„',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 1539,name:'ﬂ⁄ﬂ  ‰Ê— «·⁄’—',category:'„Ê«œ €–«∆Ì…',price:110000,pngExist:1},
{ id: 1548,name:'ozmo burger',category:'”ﬂ«ﬂ—',price:55000,pngExist:1},
{ id: 1552,name:'⁄Ìœ«‰ „«·Õ crax',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 1554,name:'kinder maxi',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 1558,name:'milka oreostrw',category:'”ﬂ«ﬂ—',price:110000,pngExist:1},
{ id: 1565,name:'nutella go',category:'”ﬂ«ﬂ—',price:150000,pngExist:1},
{ id: 1567,name:'kinder delice 2',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 1601,name:'rich marie',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 1699,name:'galaxy milk ',category:'”ﬂ«ﬂ—',price:70000,pngExist:1},
{ id: 1773,name:'unica white',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 1774,name:'unica creamy vanillia ',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 1775,name:'peanut signature ',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 1776,name:'dark signature ',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 1779,name:'hazelnut signature ',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 1780,name:'tsipers icy flakes ',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 1781,name:'tsipers choco crisps',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 1782,name:'poppins honey flakes',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 1783,name:'poppins frosted flakes ',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 1784,name:'choco bits ',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 1785,name:'big bang white chocolate ',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 1786,name:'big bang ,ilk chocolate ',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 1788,name:'big bamg choco flakes ',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 1790,name:'ﬁœ«Õ… Œ›Ì›',category:'œŒ«‰',price:20000,pngExist:1},
{ id: 1895,name:'‘«‰ﬂÌ',category:'”ﬂ«ﬂ—',price:70000,pngExist:1},
{ id: 1913,name:'go fresh',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 1950,name:'ÂÊ·“ ‘—ﬂ…',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 1951,name:'ÂÊ·“ ‘—ﬂ… «“—ﬁ',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 1956,name:'„’Ì’Â chupa chups',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 1957,name:'mentos 3d ‰⁄‰⁄',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 1984,name:'ﬁ·Ê»«  «ﬂ” —«',category:'»“Ê—« ',price:1000000,pngExist:1},
{ id: 2000,name:'nakla 250 g',category:'œŒ«‰',price:350000,pngExist:1},
{ id: 2012,name:'sitos Ê”ÿ »’· „ﬂ—„·',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 2049,name:'Ã»‰… „‘ﬂ·',category:'√Ã»«‰',price:400000,pngExist:1},
{ id: 2076,name:'„“«Ì« ﬂ›',category:'œŒ«‰',price:530000,pngExist:1},
{ id: 2093,name:'brilliant slim',category:'œŒ«‰',price:100000,pngExist:1},
{ id: 2104,name:'damla ”Ê—',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 2106,name:'mentos',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 2126,name:'okay caramel0 ',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 2140,name:'ﬂ› „“«Ì« Õ«„÷ Ê‰⁄‰⁄',category:'œŒ«‰',price:620000,pngExist:1},
{ id: 2148,name:'œÌ—Ê‰Ì —“ „’—Ì',category:'Õ»Ê»',price:90000,pngExist:1},
{ id: 2177,name:'pringles 165g original',category:'”ﬂ«ﬂ—',price:190000,pngExist:1},
{ id: 2179,name:'pringles 165g sour cream and onion',category:'”ﬂ«ﬂ—',price:190000,pngExist:1},
{ id: 2198,name:'okay strawbery ',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 2212,name:'choco balls ',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 2237,name:'gauloise «Õ„—',category:'œŒ«‰',price:130000,pngExist:1},
{ id: 2238,name:'›Õ„ ÌÕÌÏ 1ﬂ',category:'œŒ«‰',price:270000,pngExist:1},
{ id: 2239,name:'„«—Ì ”«œ…',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 2241,name:'mastro peanut  ',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 2243,name:'«ﬂ·Ì— »—Ê',category:'„Ê«œ √Ê·Ì…',price:100000,pngExist:1},
{ id: 2262,name:'«‰œÊ„Ì Œ÷«— Ã„»Ê ”',category:'„Ê«œ €–«∆Ì…',price:40000,pngExist:1},
{ id: 2293,name:'cote d dor05',category:'”ﬂ«ﬂ—',price:100000,pngExist:1},
{ id: 2296,name:'ÃÊ—œ‰Ì« „Ê“',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 2297,name:'ÃÊ—œ‰Ì« “»œ…',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 2304,name:'nouba',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 2314,name:'ETi wanted',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 2315,name:'ETi adicto gourmet',category:'”ﬂ«ﬂ—',price:45000,pngExist:1},
{ id: 2319,name:'TWIRL ',category:'”ﬂ«ﬂ—',price:110000,pngExist:1},
{ id: 2325,name:'ozmo mello',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 2327,name:'»—Ìﬂ 4 «’«»⁄',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 2335,name:'”«‰Ì « «·»«‘«',category:'œŒ«‰',price:40000,pngExist:1},
{ id: 2368,name:'dolsi »Ì “« ﬂ»Ì—',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 2369,name:'dolsi ﬂ ‘» ﬂ»Ì—',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 2370,name:'dolsi „‘«ÊÌ ﬂ»Ì—',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 2372,name:'dolsi Ã»‰… ﬂ»Ì—',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 2421,name:'biscolata due max hazelnut',category:'”ﬂ«ﬂ—',price:55000,pngExist:1},
{ id: 2426,name:'pop cake',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 2439,name:'biscolata moodd',category:'”ﬂ«ﬂ—',price:70000,pngExist:1},
{ id: 2460,name:'dabke lukum',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 2467,name:'»—«Ê‰Ì intense',category:'”ﬂ«ﬂ—',price:55000,pngExist:1},
{ id: 2479,name:'dolsi Œ· ﬂ»Ì—',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 2480,name:'dolsi ›” ﬁ ﬂ»Ì—',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 2481,name:'winston silver —›Ì⁄',category:'œŒ«‰',price:260000,pngExist:1},
{ id: 2486,name:'BEBETO watermelon',category:'”ﬂ«ﬂ—',price:75000,pngExist:1},
{ id: 2487,name:'BEBETO pink&white',category:'”ﬂ«ﬂ—',price:75000,pngExist:1},
{ id: 2489,name:'BEBETO roller',category:'”ﬂ«ﬂ—',price:75000,pngExist:1},
{ id: 2495,name:'BEBETO sour worms',category:'”ﬂ«ﬂ—',price:75000,pngExist:1},
{ id: 2496,name:'BEBETO ocean park',category:'”ﬂ«ﬂ—',price:75000,pngExist:1},
{ id: 2498,name:'BEBETO berries',category:'”ﬂ«ﬂ—',price:75000,pngExist:1},
{ id: 2510,name:'joocyz mango',category:'„‘—Ê»« ',price:20000,pngExist:1},
{ id: 2512,name:'joocyz apple',category:'„‘—Ê»« ',price:20000,pngExist:1},
{ id: 2515,name:'cookies gandour ',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 2516,name:'lucky 555 choco',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 2521,name:'„·Õ fine sea',category:'„Ê«œ €–«∆Ì…',price:20000,pngExist:1},
{ id: 2537,name:'master coctail',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 2539,name:'dolsi pista',category:'„Ì«Â',price:20000,pngExist:1},
{ id: 2540,name:'dolsi novita',category:'„Ì«Â',price:20000,pngExist:1},
{ id: 2541,name:'dolsi chocoloco',category:'„Ì«Â',price:50000,pngExist:1},
{ id: 2542,name:'dolsi maxibon',category:'„Ì«Â',price:70000,pngExist:1},
{ id: 2544,name:'dolsi choco locco',category:'„Ì«Â',price:70000,pngExist:1},
{ id: 2546,name:'dolsi kashta',category:'„Ì«Â',price:80000,pngExist:1},
{ id: 2548,name:'dolsi cappriccio',category:'„Ì«Â',price:70000,pngExist:1},
{ id: 2551,name:'dolsi cupra',category:'„Ì«Â',price:70000,pngExist:1},
{ id: 2558,name:'pringles cheese',category:'”ﬂ«ﬂ—',price:190000,pngExist:1},
{ id: 2572,name:'wafe up hazelnut',category:'”ﬂ«ﬂ—',price:45000,pngExist:1},
{ id: 2574,name:'eti gong herbs',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 2575,name:'eti gong cheese',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 2576,name:'eti gong honey',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 2621,name:'gardena hazelnut',category:'”ﬂ«ﬂ—',price:65000,pngExist:1},
{ id: 2623,name:'gardena sandwish dark choco',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 2624,name:'gardena sandwish milk vanilla',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 2633,name:'extra peppermint',category:'”ﬂ«ﬂ—',price:45000,pngExist:1},
{ id: 2636,name:'extra white',category:'”ﬂ«ﬂ—',price:45000,pngExist:1},
{ id: 2639,name:'⁄·ﬂÂ €‰œÊ— „” ﬂÂ',category:'”ﬂ«ﬂ—',price:10000,pngExist:1},
{ id: 2640,name:'⁄·ﬂÂ €‰œÊ— ›Ê«ﬂÂ',category:'”ﬂ«ﬂ—',price:10000,pngExist:1},
{ id: 2642,name:'pik one',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 2643,name:'dounat yamama',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 2647,name:'œÊ›ÌœÊ› ﬁœÌ„',category:'œŒ«‰',price:250000,pngExist:1},
{ id: 2649,name:'«‰œÊ„Ì œÊ»·',category:'„Ê«œ €–«∆Ì…',price:25000,pngExist:1},
{ id: 2660,name:'joocyz«‰«‰«”',category:'„‘—Ê»« ',price:20000,pngExist:1},
{ id: 2705,name:'biscolata stars ',category:'”ﬂ«ﬂ—',price:45000,pngExist:1},
{ id: 2715,name:'FLAKE',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 2717,name:'lovita milk',category:'”ﬂ«ﬂ—',price:115000,pngExist:1},
{ id: 2721,name:'haribo happy-cola',category:'”ﬂ«ﬂ—',price:10000,pngExist:1},
{ id: 2723,name:'jordina swiss roll',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 2741,name:'mentos sour fruite',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 2742,name:'wanted pops ',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 2763,name:'‘⁄Ì— ﬂ»Ì— ',category:'„Ê«œ €–«∆Ì…',price:75000,pngExist:1},
{ id: 2766,name:'safari',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 2779,name:'halley mini ',category:'”ﬂ«ﬂ—',price:120000,pngExist:1},
{ id: 2787,name:'⁄·ﬂ… ⁄ÌÊ‰',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 2791,name:'roshen hazl',category:'”ﬂ«ﬂ—',price:55000,pngExist:1},
{ id: 2792,name:'unica 33%',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 2820,name:'digestive dark chocolate gandour ',category:'”ﬂ«ﬂ—',price:155000,pngExist:1},
{ id: 2822,name:'poppins honey flakes 350g ',category:'”ﬂ«ﬂ—',price:360000,pngExist:1},
{ id: 2824,name:'choco  bits ',category:'”ﬂ«ﬂ—',price:360000,pngExist:1},
{ id: 2825,name:'choco bumps 350g +20%',category:'”ﬂ«ﬂ—',price:255000,pngExist:1},
{ id: 2826,name:'marlboro crafted compact blue',category:'œŒ«‰',price:100000,pngExist:1},
{ id: 2890,name:'mentos water melon mini',category:'”ﬂ«ﬂ—',price:105000,pngExist:1},
{ id: 2891,name:'mentos strawbery mini ',category:'”ﬂ«ﬂ—',price:105000,pngExist:1},
{ id: 2892,name:'mentos  bubble mini ',category:'”ﬂ«ﬂ—',price:105000,pngExist:1},
{ id: 2893,name:'mentos fresh mint mini ',category:'”ﬂ«ﬂ—',price:105000,pngExist:1},
{ id: 2909,name:'milka oreo w',category:'”ﬂ«ﬂ—',price:110000,pngExist:1},
{ id: 2921,name:'snacks',category:'”ﬂ«ﬂ—',price:65000,pngExist:1},
{ id: 2966,name:'nescafe 2 in 1',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 2974,name:'yamama love choco',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 2977,name:'yamama roll',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 2993,name:'skittles yellow',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 2996,name:'gofret orange 142g',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 3011,name:'loacker sandwish hazelnut 25g',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 3014,name:'–—…',category:'»“Ê—« ',price:360000,pngExist:1},
{ id: 3020,name:'dark 330 ',category:'„‘—Ê»« ',price:45000,pngExist:1},
{ id: 3033,name:'”«‰Ì « —Ê· al basha',category:'œŒ«‰',price:50000,pngExist:1},
{ id: 3045,name:'maggi  œÃ«Ã *8',category:'„Ê«œ €–«∆Ì…',price:35000,pngExist:1},
{ id: 3080,name:'halley roll  ÃœÌœ',category:'”ﬂ«ﬂ—',price:180000,pngExist:1},
{ id: 3087,name:'loacker sandiwsh choco',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 3099,name:'biscolate milk cream m',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 3113,name:'poppins choco pops ',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 3144,name:'mentos fresh ',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 3165,name:'pringles paprika ﬂ»Ì—',category:'”ﬂ«ﬂ—',price:190000,pngExist:1},
{ id: 3167,name:'nutella bag ',category:'”ﬂ«ﬂ—',price:410000,pngExist:1},
{ id: 3169,name:'biscoff roll',category:'”ﬂ«ﬂ—',price:180000,pngExist:1},
{ id: 3170,name:'happy jo',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 3171,name:'mallow pop marshmello',category:'”ﬂ«ﬂ—',price:70000,pngExist:1},
{ id: 3172,name:'toren coconut',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 3173,name:'toren lemon',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 3174,name:'toren orange',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 3175,name:'jordina dream choco',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 3187,name:'no :1 bllack',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 3197,name:'lovita cocoa',category:'”ﬂ«ﬂ—',price:115000,pngExist:1},
{ id: 3266,name:'croisant al asr cheese ',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 3328,name:'oreo original *4',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 3358,name:'⁄·ﬂ… €‰œÊ— ',category:'”ﬂ«ﬂ—',price:10000,pngExist:1},
{ id: 3378,name:'–—Â white bell',category:'„Ê«œ €–«∆Ì…',price:115000,pngExist:1},
{ id: 3422,name:'cedars silver line',category:'œŒ«‰',price:70000,pngExist:1},
{ id: 3438,name:'crunch milk',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 3467,name:'poppins cookies',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 3481,name:'Õ„’ «»Ê ⁄—»',category:'„Ê«œ €–«∆Ì…',price:150000,pngExist:1},
{ id: 3483,name:'masterb ﬂ»ÌÌÌ— „·Õ ',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 3484,name:'master ﬂ»ÌÌÌ— »«—»ﬂÌÊ',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 3489,name:'Ÿ—› cocoa granule',category:'„Ê«œ €–«∆Ì…',price:15000,pngExist:1},
{ id: 3510,name:'milkaa »‰œﬁ',category:'”ﬂ«ﬂ—',price:110000,pngExist:1},
{ id: 3554,name:'snickers new',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 3561,name:'rim 0.5l',category:'„Ì«Â',price:20000,pngExist:1},
{ id: 3564,name:'’‰œÊﬁ rim 1.5 l',category:'„Ì«Â',price:165000,pngExist:1},
{ id: 3581,name:'hazelnut wooly booly',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 3582,name:'dark wooly booly',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 3583,name:'choco wooly booly',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 3650,name:'ness 1',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 3656,name:'ness 1 ›” ﬁ Õ·»Ì ',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 3671,name:'elegace silver',category:'œŒ«‰',price:50000,pngExist:1},
{ id: 3681,name:'digestive deemah',category:'”ﬂ«ﬂ—',price:45000,pngExist:1},
{ id: 3685,name:'master Õ— ﬂ»Ì—',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 3687,name:'jellygum grape',category:'”ﬂ«ﬂ—',price:15000,pngExist:1},
{ id: 3701,name:'œ«—ﬂ »·ÊÊ 500„',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 3723,name:'«Ê‰Ìﬂ« „«ﬂ”',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 3743,name:'Ÿ—› „«ÃÌ Œ÷«— «·—»Ì⁄ 1',category:'„Ê«œ €–«∆Ì…',price:65000,pngExist:1},
{ id: 3744,name:'Ÿ—› „«ÃÌ «·œÃ«Ã12',category:'„Ê«œ €–«∆Ì…',price:55000,pngExist:1},
{ id: 3768,name:'ozmo poxi ',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 3786,name:'milka red',category:'”ﬂ«ﬂ—',price:120000,pngExist:1},
{ id: 3797,name:'buldak pink',category:'”ﬂ«ﬂ—',price:160000,pngExist:1},
{ id: 3798,name:'·Ê ” 2 Õ»…',category:'”ﬂ«ﬂ—',price:35000,pngExist:1},
{ id: 3808,name:'„‰ Ê” ›«‰ «',category:'”ﬂ«ﬂ—',price:55000,pngExist:1},
{ id: 3811,name:'„Ìﬂ” ﬂ«ÃÌ ',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 3831,name:'«ﬂÊ«›Ì‰« 0.6 ·',category:'„Ì«Â',price:20000,pngExist:1},
{ id: 3833,name:'«ﬂÊ«›Ì‰« 1.5 ·',category:'„Ì«Â',price:30000,pngExist:1},
{ id: 3847,name:'master sitos kbir',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 3926,name:'kinder happy',category:'”ﬂ«ﬂ—',price:70000,pngExist:1},
{ id: 3927,name:'day break',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 3929,name:'biskrem »‰œﬁ',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 3932,name:'milka ›—«Ê·…',category:'”ﬂ«ﬂ—',price:110000,pngExist:1},
{ id: 3951,name:'master Õ— ”Ì Ê” ﬂ»Ì— ',category:'„Ê«œ €–«∆Ì…',price:90000,pngExist:1},
{ id: 4061,name:'leo go 1',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 4064,name:'m and m ‘ÊﬂÊ·«',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 4066,name:'milka ”«œ…...',category:'”ﬂ«ﬂ—',price:110000,pngExist:1},
{ id: 4068,name:'milka luflee ',category:'”ﬂ«ﬂ—',price:110000,pngExist:1},
{ id: 4069,name:'milka riso',category:'”ﬂ«ﬂ—',price:110000,pngExist:1},
{ id: 4088,name:'popel coakie ',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 4089,name:'À·Ã 1k',category:'„Ì«Â',price:30000,pngExist:1},
{ id: 4116,name:'poppins choco pops 438g',category:'”ﬂ«ﬂ—',price:255000,pngExist:1},
{ id: 4128,name:'„·»Ê—Ê ﬂ—›  —›Ì⁄',category:'œŒ«‰',price:100000,pngExist:1},
{ id: 4134,name:'baunty dobel',category:'”ﬂ«ﬂ—',price:50000,pngExist:1},
{ id: 4137,name:'okay oreoo',category:'”ﬂ«ﬂ—',price:20000,pngExist:1},
{ id: 4148,name:'crumbz Õ»‰…',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 4149,name:'crumbz „·Õ',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 4150,name:'crumbz Õ«—',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 4151,name:'crumbz »«—»ÌﬂÌÊ',category:'”ﬂ«ﬂ—',price:40000,pngExist:1},
{ id: 4213,name:'galaxy flutes 1',category:'”ﬂ«ﬂ—',price:25000,pngExist:1},
{ id: 4244,name:'·»‰… 0.5 ⁄»œ «·”« —',category:'√·»«‰',price:200000,pngExist:1},
{ id: 4250,name:'«‰œÊ„Ì hazir noodle',category:'„Ê«œ €–«∆Ì…',price:25000,pngExist:1},
{ id: 4257,name:'„»”„ «—ﬂÌ·… «·‰Œ·…',category:'œŒ«‰',price:40000,pngExist:1},
{ id: 4279,name:'master 1dollar ﬂÊﬂ Ì·',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 4284,name:'„«” — ’€Ì— ”Ì Ê”ÌÌ’·',category:'”ﬂ«ﬂ—',price:10000,pngExist:1},
{ id: 4301,name:'snips 100000 curls chees',category:'”ﬂ«ﬂ—',price:100000,pngExist:1},
{ id: 4310,name:'„«” — »›Ì“ ﬂ»ÌÌÌ— ›” ﬁ',category:'”ﬂ«ﬂ—',price:75000,pngExist:1},
{ id: 4438,name:'»Ì”ﬂ—Ì„ ‘—ﬂ…',category:'”ﬂ«ﬂ—',price:55000,pngExist:1},
{ id: 4453,name:'kinder happy hippo',category:'”ﬂ«ﬂ—',price:30000,pngExist:1},
{ id: 4470,name:'»Ê‰ÃÌ” orange 6Õ»« ',category:'„‘—Ê»« ',price:70000,pngExist:1},
{ id: 4476,name:'ÃÌ· Ì‰',category:'»“Ê—« ',price:500000,pngExist:1},
{ id: 4492,name:'”„”„Ì… habbal',category:'”ﬂ«ﬂ—',price:60000,pngExist:1},
{ id: 4530,name:'master salt ﬂ»Ì—',category:'”ﬂ«ﬂ—',price:90000,pngExist:1},
{ id: 4544,name:'‘ÊﬂÊ·« œ»Ì »—Ê',category:'„Ê«œ √Ê·Ì…',price:250000,pngExist:1},
{ id: 4574,name:'„«—‘„Ì·Ê ',category:'»“Ê—« ',price:500000,pngExist:1}
];