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
{ name: 'حبوب'},
{ name: 'أعشاب'},
{ name: 'بلاستيكيات'},
{ name: 'قلوبات'},
{ name: 'مواد أولية'},
{ name: 'سكاكر'},
{ name: 'بزورات'},
{ name: 'ألبان'},
{ name: 'أجبان'},
{ name: 'مواد غذائية'},
{ name: 'مشروبات'},
{ name: 'منظفات'},
{ name: 'مواد أخرى'},
{ name: 'مياه'},
{ name: 'دخان'}
];
const products=
[
{ id: 1,name:'صلصة يمامة 660غ',category:'مواد غذائية',price:170000,pngExist:1},
{ id: 3,name:'زهورات العطارةالكركديه',category:'أعشاب',price:80000,pngExist:1},
{ id: 4,name:'زهورات العطارة خ ملينة',category:'أعشاب',price:80000,pngExist:1},
{ id: 5,name:'زهورات العطارة موريجنا',category:'أعشاب',price:80000,pngExist:1},
{ id: 6,name:'زهورات العطارة ز شامية',category:'أعشاب',price:80000,pngExist:1},
{ id: 7,name:'زهورات العطارة زنجبيل وعسل',category:'أعشاب',price:80000,pngExist:1},
{ id: 8,name:'زهورات العطارة بابونج',category:'أعشاب',price:80000,pngExist:1},
{ id: 9,name:'زهورات العطارة كمون وليمون',category:'أعشاب',price:80000,pngExist:1},
{ id: 11,name:'كاريوكا 400غرام',category:'مواد غذائية',price:620000,pngExist:1},
{ id: 13,name:'معجون غادةحلاقة',category:'منظفات',price:90000,pngExist:1},
{ id: 15,name:'jordina panda',category:'سكاكر',price:20000,pngExist:1},
{ id: 16,name:'jordina choco cake',category:'سكاكر',price:15000,pngExist:1},
{ id: 17,name:'jordina super roll',category:'سكاكر',price:15000,pngExist:1},
{ id: 22,name:'ميونيز ويت بل 1000مل',category:'مواد غذائية',price:390000,pngExist:1},
{ id: 23,name:'ميونيز ويت بل 500مل',category:'مواد غذائية',price:180000,pngExist:1},
{ id: 25,name:'دومينغو 200 غرام',category:'مواد غذائية',price:250000,pngExist:1},
{ id: 26,name:'دومينغو 400غرام',category:'مشروبات',price:555000,pngExist:1},
{ id: 27,name:'زيت سيدي هشام 1 ليتر',category:'مواد غذائية',price:495000,pngExist:1},
{ id: 28,name:'زيت سيدي هشام 2 ليتر',category:'مواد غذائية',price:980000,pngExist:1},
{ id: 32,name:'زيت الوزير 3ليتر',category:'مواد غذائية',price:1800000,pngExist:1},
{ id: 35,name:'اطلس محارم',category:'مواد أخرى',price:80000,pngExist:1},
{ id: 39,name:'سيف خشن',category:'منظفات',price:100000,pngExist:1},
{ id: 42,name:'شوربا تاج دجاج',category:'مواد غذائية',price:40000,pngExist:1},
{ id: 43,name:'قطن اذنين',category:'مواد أخرى',price:20000,pngExist:1},
{ id: 44,name:'درينا مانغا ظرف',category:'مواد غذائية',price:20000,pngExist:1},
{ id: 45,name:'درينا ظرف ورد',category:'مواد غذائية',price:20000,pngExist:1},
{ id: 46,name:'درينا ظرف فريز',category:'مواد غذائية',price:20000,pngExist:1},
{ id: 47,name:'درينا ظرف توت',category:'مواد غذائية',price:20000,pngExist:1},
{ id: 48,name:'درينا ظرف اناناس',category:'مواد غذائية',price:20000,pngExist:1},
{ id: 49,name:'درينا ظرف الغوافة',category:'مواد غذائية',price:20000,pngExist:1},
{ id: 50,name:'درينا ظرف تروبيكال',category:'مواد غذائية',price:20000,pngExist:1},
{ id: 51,name:'درينا ظرف برتقال',category:'مواد غذائية',price:20000,pngExist:1},
{ id: 53,name:'قشقوان رونا300غرام',category:'أجبان',price:300000,pngExist:1},
{ id: 54,name:'ميونيز هوليدي صغير',category:'مواد غذائية',price:70000,pngExist:1},
{ id: 55,name:'coffee creamer400g',category:'مواد غذائية',price:110000,pngExist:1},
{ id: 57,name:'اودكس 1200مل',category:'منظفات',price:95000,pngExist:1},
{ id: 59,name:'بريل600مل',category:'منظفات',price:85000,pngExist:1},
{ id: 60,name:'دومتي 250غرام',category:'أجبان',price:60000,pngExist:1},
{ id: 64,name:'rambo',category:'منظفات',price:245000,pngExist:1},
{ id: 67,name:'تونا deroniحر',category:'مواد غذائية',price:135000,pngExist:1},
{ id: 68,name:'تون deroni ',category:'مواد غذائية',price:135000,pngExist:1},
{ id: 70,name:'اودكس غالون4ك',category:'منظفات',price:315000,pngExist:1},
{ id: 74,name:'اندومي 75غ',category:'مواد غذائية',price:30000,pngExist:1},
{ id: 77,name:'اندومي كاري 75غ',category:'مواد غذائية',price:25000,pngExist:1},
{ id: 80,name:'كتشب xtra 2.2;',category:'مواد غذائية',price:300000,pngExist:1},
{ id: 83,name:'برايفت9 طويل  ',category:'مواد أخرى',price:90000,pngExist:1},
{ id: 84,name:'بريفت 8',category:'مواد أخرى',price:60000,pngExist:1},
{ id: 86,name:'مماسح ارض',category:'منظفات',price:45000,pngExist:1},
{ id: 87,name:'ليف استحمام',category:'منظفات',price:85000,pngExist:1},
{ id: 88,name:'معكرونة reggia',category:'مواد غذائية',price:45000,pngExist:1},
{ id: 91,name:'حمص مطحون',category:'مواد غذائية',price:60000,pngExist:1},
{ id: 92,name:'بازيلا شتورا صغير',category:'مواد غذائية',price:55000,pngExist:1},
{ id: 93,name:'ملح pearl',category:'مواد غذائية',price:20000,pngExist:1},
{ id: 94,name:'بازيلا شتورا850 غرام ',category:'مواد غذائية',price:110000,pngExist:1},
{ id: 95,name:'فول شتورا850',category:'مواد غذائية',price:110000,pngExist:1},
{ id: 96,name:'فول شتورا 400غرام',category:'مواد غذائية',price:50000,pngExist:1},
{ id: 97,name:'فول مع حمص شتورا 400 غرام',category:'مواد غذائية',price:55000,pngExist:1},
{ id: 98,name:'حمص حب شتورا',category:'مواد غذائية',price:65000,pngExist:1},
{ id: 99,name:'فول مع حمص شتورا 600 غرام',category:'مواد غذائية',price:75000,pngExist:1},
{ id: 100,name:'فول شتورا 600غرام',category:'مواد غذائية',price:75000,pngExist:1},
{ id: 102,name:'قداحة فونيكس',category:'دخان',price:25000,pngExist:1},
{ id: 104,name:'ميونيز dollys 250ml',category:'مواد غذائية',price:125000,pngExist:1},
{ id: 106,name:'هنية دجاج 1 ك',category:'مواد غذائية',price:180000,pngExist:1},
{ id: 107,name:'هنية بقر 340غ',category:'مواد غذائية',price:90000,pngExist:1},
{ id: 108,name:'هنية دجاج 340',category:'مواد غذائية',price:90000,pngExist:1},
{ id: 110,name:'هنية بقر 200غ',category:'مواد غذائية',price:65000,pngExist:1},
{ id: 111,name:'nutella630g',category:'مواد غذائية',price:560000,pngExist:1},
{ id: 112,name:'nutella400غ',category:'مواد غذائية',price:350000,pngExist:1},
{ id: 113,name:'panino ',category:'سكاكر',price:15000,pngExist:1},
{ id: 114,name:'فطر شرائح glendy',category:'مواد غذائية',price:60000,pngExist:1},
{ id: 136,name:'دارك بلو 1ليتر',category:'مشروبات',price:110000,pngExist:1},
{ id: 137,name:'سكر deroni',category:'مواد غذائية',price:75000,pngExist:1},
{ id: 144,name:'بوم بوم-250ml',category:'مشروبات',price:80000,pngExist:1},
{ id: 152,name:'زيت bell food-5 ليتر',category:'مواد غذائية',price:590000,pngExist:1},
{ id: 154,name:'دومتي - 500 غرام',category:'أجبان',price:115000,pngExist:1},
{ id: 161,name:'جبنة قشقوان-رونا 600 غرام',category:'أجبان',price:525000,pngExist:1},
{ id: 181,name:'ببسي 2250',category:'مشروبات',price:135000,pngExist:1},
{ id: 182,name:'سفن اب2250',category:'مشروبات',price:135000,pngExist:1},
{ id: 184,name:'ببسي 1250 مل جديد',category:'مشروبات',price:110000,pngExist:1},
{ id: 186,name:'سفن1250',category:'مشروبات',price:110000,pngExist:1},
{ id: 202,name:'سفن اب دايت330',category:'مشروبات',price:50000,pngExist:1},
{ id: 221,name:'pipore',category:'مواد غذائية',price:120000,pngExist:1},
{ id: 311,name:'jordina red',category:'سكاكر',price:25000,pngExist:1},
{ id: 312,name:'jordina blue ',category:'سكاكر',price:20000,pngExist:1},
{ id: 319,name:'كبايات eco',category:'بلاستيكيات',price:60000,pngExist:1},
{ id: 342,name:'زيت الوزير 0.5ل',category:'مواد غذائية',price:390000,pngExist:1},
{ id: 351,name:'حليب مكثف dual1kg',category:'مواد غذائية',price:225000,pngExist:1},
{ id: 376,name:'domo mug cakechoco',category:'مواد غذائية',price:55000,pngExist:1},
{ id: 377,name:'domo mug cake choco karmel',category:'مواد غذائية',price:55000,pngExist:1},
{ id: 378,name:'domo choco haz mug cake',category:'مواد غذائية',price:55000,pngExist:1},
{ id: 379,name:'بسكويت ديو',category:'سكاكر',price:90000,pngExist:1},
{ id: 386,name:'علكة cloretsالنعناع',category:'سكاكر',price:30000,pngExist:1},
{ id: 388,name:'علكة clorest نعناع اصلي',category:'سكاكر',price:30000,pngExist:1},
{ id: 390,name:'علكة clorestقرفة',category:'سكاكر',price:30000,pngExist:1},
{ id: 394,name:'سكيتلز أحمر',category:'سكاكر',price:60000,pngExist:1},
{ id: 400,name:'Ice Coffee Black',category:'مشروبات',price:65000,pngExist:1},
{ id: 402,name:'M&M chocolate',category:'سكاكر',price:70000,pngExist:1},
{ id: 405,name:'اوزمو كلوب حبة',category:'سكاكر',price:65000,pngExist:1},
{ id: 406,name:'ozmo مرهم',category:'سكاكر',price:50000,pngExist:1},
{ id: 408,name:'البيلا باستا',category:'سكاكر',price:25000,pngExist:1},
{ id: 410,name:'البيلا كيك',category:'سكاكر',price:20000,pngExist:1},
{ id: 412,name:'albeni 30%',category:'سكاكر',price:35000,pngExist:1},
{ id: 416,name:'albeni كيك',category:'سكاكر',price:55000,pngExist:1},
{ id: 418,name:'albeni رول',category:'سكاكر',price:60000,pngExist:1},
{ id: 422,name:'ozmo بيضة',category:'سكاكر',price:90000,pngExist:1},
{ id: 424,name:'ozmo club',category:'سكاكر',price:65000,pngExist:1},
{ id: 427,name:'بريك ديلات',category:'سكاكر',price:15000,pngExist:1},
{ id: 440,name:'digestive choco',category:'سكاكر',price:90000,pngExist:1},
{ id: 445,name:'damla ch',category:'سكاكر',price:15000,pngExist:1},
{ id: 452,name:'علكة مينتوس 3dp',category:'سكاكر',price:30000,pngExist:1},
{ id: 453,name:'علكة مينتوس 3dب',category:'سكاكر',price:30000,pngExist:1},
{ id: 454,name:'مينتوس ice n',category:'سكاكر',price:50000,pngExist:1},
{ id: 455,name:'مينتوس ice n2',category:'سكاكر',price:50000,pngExist:1},
{ id: 456,name:'مينتوس ice r',category:'سكاكر',price:50000,pngExist:1},
{ id: 460,name:'hanimeller',category:'سكاكر',price:45000,pngExist:1},
{ id: 461,name:'kombo',category:'سكاكر',price:45000,pngExist:1},
{ id: 462,name:'wafe up b',category:'سكاكر',price:110000,pngExist:1},
{ id: 466,name:'leo',category:'سكاكر',price:65000,pngExist:1},
{ id: 485,name:'لبن libanlait 1 kg',category:'ألبان',price:170000,pngExist:1},
{ id: 486,name:'لبن libanlait 2 kg',category:'ألبان',price:300000,pngExist:1},
{ id: 487,name:'candyup choc',category:'ألبان',price:35000,pngExist:1},
{ id: 488,name:'candy up fraise',category:'ألبان',price:35000,pngExist:1},
{ id: 489,name:'عيران صغير',category:'ألبان',price:50000,pngExist:1},
{ id: 494,name:'kinder joy p',category:'سكاكر',price:80000,pngExist:1},
{ id: 500,name:'metro 40%',category:'سكاكر',price:35000,pngExist:1},
{ id: 508,name:'unica ',category:'سكاكر',price:15000,pngExist:1},
{ id: 509,name:'unica black',category:'سكاكر',price:15000,pngExist:1},
{ id: 510,name:'unica big',category:'سكاكر',price:40000,pngExist:1},
{ id: 511,name:'yamama brownie',category:'سكاكر',price:35000,pngExist:1},
{ id: 516,name:'granolies p',category:'سكاكر',price:40000,pngExist:1},
{ id: 517,name:'granolies oreo',category:'سكاكر',price:40000,pngExist:1},
{ id: 518,name:'granolies choco',category:'سكاكر',price:40000,pngExist:1},
{ id: 524,name:'dabke original',category:'سكاكر',price:15000,pngExist:1},
{ id: 525,name:'yan yan',category:'سكاكر',price:80000,pngExist:1},
{ id: 526,name:'mastro kappa',category:'سكاكر',price:20000,pngExist:1},
{ id: 532,name:'nesquik',category:'سكاكر',price:35000,pngExist:1},
{ id: 534,name:'no 1',category:'سكاكر',price:30000,pngExist:1},
{ id: 538,name:'pringles 40g orignal',category:'سكاكر',price:90000,pngExist:1},
{ id: 540,name:'pringles 40g sour and onion',category:'سكاكر',price:80000,pngExist:1},
{ id: 541,name:'pringles 40g hot and spicy',category:'سكاكر',price:90000,pngExist:1},
{ id: 553,name:'ulker  kakaolu',category:'سكاكر',price:60000,pngExist:1},
{ id: 554,name:'saklikoy',category:'سكاكر',price:50000,pngExist:1},
{ id: 555,name:'toren cocoa',category:'سكاكر',price:35000,pngExist:1},
{ id: 557,name:'toren strawberry',category:'سكاكر',price:35000,pngExist:1},
{ id: 559,name:'maltesers',category:'سكاكر',price:70000,pngExist:1},
{ id: 564,name:'junior',category:'سكاكر',price:35000,pngExist:1},
{ id: 565,name:'adicto ',category:'سكاكر',price:40000,pngExist:1},
{ id: 567,name:'wafe up cocoa',category:'سكاكر',price:45000,pngExist:1},
{ id: 568,name:'wafe up strawberry',category:'سكاكر',price:45000,pngExist:1},
{ id: 569,name:'wafe up d choco',category:'سكاكر',price:55000,pngExist:1},
{ id: 571,name:'gofret kakaolu',category:'سكاكر',price:20000,pngExist:1},
{ id: 574,name:'tuttifrutti',category:'سكاكر',price:40000,pngExist:1},
{ id: 575,name:'kitkat',category:'سكاكر',price:60000,pngExist:1},
{ id: 577,name:'ulker جارور احمر',category:'سكاكر',price:80000,pngExist:1},
{ id: 581,name:'bounty ',category:'سكاكر',price:80000,pngExist:1},
{ id: 583,name:'mars',category:'سكاكر',price:60000,pngExist:1},
{ id: 584,name:'twix',category:'سكاكر',price:60000,pngExist:1},
{ id: 585,name:'laviva',category:'سكاكر',price:60000,pngExist:1},
{ id: 588,name:'torku',category:'سكاكر',price:60000,pngExist:1},
{ id: 591,name:'twins',category:'سكاكر',price:65000,pngExist:1},
{ id: 592,name:'biscolata duomax',category:'سكاكر',price:55000,pngExist:1},
{ id: 596,name:'break',category:'سكاكر',price:15000,pngExist:1},
{ id: 607,name:'master كبير خل وملح',category:'سكاكر',price:50000,pngExist:1},
{ id: 608,name:'master كبير حار',category:'سكاكر',price:50000,pngExist:1},
{ id: 612,name:'master كبير ملح',category:'سكاكر',price:50000,pngExist:1},
{ id: 613,name:'master كبير باربكيو ',category:'سكاكر',price:50000,pngExist:1},
{ id: 616,name:'master sitos جبنة',category:'سكاكر',price:50000,pngExist:1},
{ id: 619,name:'master كبير بفيز فستق',category:'سكاكر',price:50000,pngExist:1},
{ id: 620,name:'unica كيس',category:'سكاكر',price:120000,pngExist:1},
{ id: 634,name:'master بفيز وسط بوشار',category:'سكاكر',price:25000,pngExist:1},
{ id: 635,name:'master بفيز وسط فستق',category:'سكاكر',price:25000,pngExist:1},
{ id: 641,name:'master وسط حار',category:'سكاكر',price:25000,pngExist:1},
{ id: 643,name:'master وسط باربكيو',category:'سكاكر',price:25000,pngExist:1},
{ id: 644,name:'master ملح وخل',category:'سكاكر',price:25000,pngExist:1},
{ id: 645,name:'master وسط ملح',category:'سكاكر',price:25000,pngExist:1},
{ id: 654,name:'olala sufle',category:'سكاكر',price:80000,pngExist:1},
{ id: 655,name:'هالي عائلي',category:'سكاكر',price:180000,pngExist:1},
{ id: 657,name:'dark blue',category:'مشروبات',price:45000,pngExist:1},
{ id: 678,name:'snips صغير جبنة فرنسية',category:'سكاكر',price:25000,pngExist:1},
{ id: 679,name:'snips كبير ملح',category:'سكاكر',price:50000,pngExist:1},
{ id: 680,name:'snipsكبير جبنة فرنسية',category:'سكاكر',price:50000,pngExist:1},
{ id: 681,name:'snips كبير عسل وخردل',category:'سكاكر',price:50000,pngExist:1},
{ id: 682,name:'snips كبير خل وملح',category:'سكاكر',price:50000,pngExist:1},
{ id: 691,name:'corn cobs30g',category:'سكاكر',price:25000,pngExist:1},
{ id: 702,name:'مكعب ماجي',category:'مواد غذائية',price:20000,pngExist:1},
{ id: 706,name:'كيري 6قطع',category:'أجبان',price:130000,pngExist:1},
{ id: 712,name:'ظرف نسكافي كلاسيك',category:'مواد غذائية',price:20000,pngExist:1},
{ id: 718,name:'biskrem 50%',category:'سكاكر',price:70000,pngExist:1},
{ id: 723,name:'مستر جوسي180غ اناناس',category:'مشروبات',price:15000,pngExist:1},
{ id: 724,name:'مستر جوسي برتقال 180غ',category:'مشروبات',price:15000,pngExist:1},
{ id: 764,name:'لوز ',category:'قلوبات',price:1000000,pngExist:1},
{ id: 775,name:'اليمامة دبس رمان300 مل',category:'مواد غذائية',price:140000,pngExist:1},
{ id: 909,name:'7up 330ml تنك',category:'مشروبات',price:60000,pngExist:1},
{ id: 953,name:' لبن بلدي 5 kg  دون فراغة ',category:'ألبان',price:330000,pngExist:1},
{ id: 955,name:'لبن بلدي  2 kg  ',category:'ألبان',price:180000,pngExist:1},
{ id: 956,name:'لبن بلدي  1 kg',category:'ألبان',price:100000,pngExist:1},
{ id: 957,name:'علبة لبنة 0.5 ك',category:'ألبان',price:70000,pngExist:1},
{ id: 958,name:'بزر ميال',category:'بزورات',price:350000,pngExist:1},
{ id: 959,name:'بزر مصري',category:'بزورات',price:380000,pngExist:1},
{ id: 961,name:'فستق',category:'بزورات',price:400000,pngExist:1},
{ id: 962,name:'كركري ',category:'بزورات',price:360000,pngExist:1},
{ id: 964,name:'بزر ابيض',category:'بزورات',price:500000,pngExist:1},
{ id: 966,name:'بزر شمام',category:'بزورات',price:500000,pngExist:1},
{ id: 967,name:'مخلوطة',category:'بزورات',price:450000,pngExist:1},
{ id: 1012,name:'milka bubbly white',category:'سكاكر',price:120000,pngExist:1},
{ id: 1013,name:'milka oreo choco',category:'سكاكر',price:120000,pngExist:1},
{ id: 1014,name:'milka tuc',category:'سكاكر',price:120000,pngExist:1},
{ id: 1018,name:'سيدرز كرتون فضي',category:'دخان',price:70000,pngExist:1},
{ id: 1019,name:'سيدرز كرتون ازرق',category:'دخان',price:70000,pngExist:1},
{ id: 1020,name:'سيدرز فضي طويل',category:'دخان',price:70000,pngExist:1},
{ id: 1023,name:'كنت ازرق',category:'دخان',price:150000,pngExist:1},
{ id: 1024,name:'كنت فضي',category:'دخان',price:150000,pngExist:1},
{ id: 1025,name:'سيدرز قديم',category:'دخان',price:65000,pngExist:1},
{ id: 1027,name:'خبز قلقاس كبير',category:'مواد غذائية',price:80000,pngExist:1},
{ id: 1028,name:' خبز مشكل كبير ',category:'مواد غذائية',price:75000,pngExist:1},
{ id: 1029,name:'skittels prple',category:'سكاكر',price:95000,pngExist:1},
{ id: 1033,name:'خبز العصر شوفان 6',category:'مواد غذائية',price:75000,pngExist:1},
{ id: 1034,name:'خبز العصر اسمر 8',category:'مواد غذائية',price:60000,pngExist:1},
{ id: 1054,name:'kraker',category:'سكاكر',price:15000,pngExist:1},
{ id: 1058,name:'ozmo popsy',category:'سكاكر',price:45000,pngExist:1},
{ id: 1073,name:'ظرف torabika',category:'مشروبات',price:20000,pngExist:1},
{ id: 1074,name:'jordina 3 s',category:'سكاكر',price:20000,pngExist:1},
{ id: 1079,name:'albeni tane tane',category:'مشروبات',price:60000,pngExist:1},
{ id: 1112,name:'هالي ساندوش',category:'سكاكر',price:25000,pngExist:1},
{ id: 1113,name:'ديو كاكو',category:'سكاكر',price:90000,pngExist:1},
{ id: 1117,name:'rulokat 9',category:'سكاكر',price:45000,pngExist:1},
{ id: 1119,name:'haylayf',category:'سكاكر',price:35000,pngExist:1},
{ id: 1120,name:'lotus t',category:'سكاكر',price:130000,pngExist:1},
{ id: 1121,name:'skittels bite red',category:'سكاكر',price:95000,pngExist:1},
{ id: 1133,name:'كرتونة بيض كبير',category:'مواد غذائية',price:270000,pngExist:1},
{ id: 1140,name:'ozmo cornee',category:'سكاكر',price:45000,pngExist:1},
{ id: 1146,name:'ملبورو ورق احمر',category:'دخان',price:230000,pngExist:1},
{ id: 1147,name:'ملبورو ورق ابيض',category:'دخان',price:200000,pngExist:1},
{ id: 1148,name:'ملبورو touch',category:'دخان',price:155000,pngExist:1},
{ id: 1149,name:'ملبورو كرفت احمر',category:'دخان',price:135000,pngExist:1},
{ id: 1150,name:'ملبورو كرفت ابيض',category:'دخان',price:130000,pngExist:1},
{ id: 1151,name:'وينستون ازرق compact',category:'دخان',price:125000,pngExist:1},
{ id: 1152,name:'ونستون رمادي compact',category:'دخان',price:125000,pngExist:1},
{ id: 1153,name:'ونستون ازرق لايت',category:'دخان',price:190000,pngExist:1},
{ id: 1154,name:'ونستون لايت رفيع',category:'دخان',price:150000,pngExist:1},
{ id: 1155,name:'ونشستر ورق',category:'دخان',price:100000,pngExist:1},
{ id: 1156,name:'ونشستر كرتون ',category:'دخان',price:110000,pngExist:1},
{ id: 1157,name:'مارلبورو احمر كرتون',category:'دخان',price:230000,pngExist:1},
{ id: 1158,name:'مارلبورو ابيض كرتون',category:'دخان',price:230000,pngExist:1},
{ id: 1159,name:'دافيدوف غولد',category:'دخان',price:250000,pngExist:1},
{ id: 1160,name:'دافيدوف ازرق ايفولف',category:'دخان',price:130000,pngExist:1},
{ id: 1161,name:'دافيدوف احمر ايفولف',category:'دخان',price:130000,pngExist:1},
{ id: 1162,name:'اليغنس ازرق رفيع',category:'دخان',price:50000,pngExist:1},
{ id: 1164,name:'سيدرز فضي رفيع',category:'دخان',price:70000,pngExist:1},
{ id: 1165,name:'سيدرز اسود رفيع',category:'دخان',price:75000,pngExist:1},
{ id: 1166,name:'سيدرز ازرق رفيع',category:'دخان',price:75000,pngExist:1},
{ id: 1171,name:'نخلة تفاحتين',category:'دخان',price:180000,pngExist:1},
{ id: 1172,name:'مزايا حامض ونعنع',category:'دخان',price:110000,pngExist:1},
{ id: 1173,name:'مزايا تفاحتين',category:'دخان',price:110000,pngExist:1},
{ id: 1174,name:'خليل مامون',category:'دخان',price:110000,pngExist:1},
{ id: 1183,name:'خبز صاج',category:'مواد غذائية',price:70000,pngExist:1},
{ id: 1187,name:'غالون مياه الصفا',category:'مياه',price:60000,pngExist:1},
{ id: 1188,name:'غالون مياه ten',category:'مياه',price:110000,pngExist:1},
{ id: 1193,name:'pik one candy peanut',category:'سكاكر',price:40000,pngExist:1},
{ id: 1241,name:'فحم فلت',category:'دخان',price:380000,pngExist:1},
{ id: 1255,name:'تنور العصر شوفان',category:'مواد غذائية',price:60000,pngExist:1},
{ id: 1260,name:'davidoff silver',category:'دخان',price:130000,pngExist:1},
{ id: 1261,name:'nakhlaكف',category:'دخان',price:860000,pngExist:1},
{ id: 1262,name:'tofiluk',category:'سكاكر',price:20000,pngExist:1},
{ id: 1267,name:'gandour lucky555',category:'سكاكر',price:10000,pngExist:1},
{ id: 1268,name:'مستر جوسي ص فريز وموز',category:'مشروبات',price:15000,pngExist:1},
{ id: 1269,name:'مستر جوسي تفاح صغير',category:'مشروبات',price:15000,pngExist:1},
{ id: 1270,name:'مستر جوسي مانغو صغير',category:'مشروبات',price:15000,pngExist:1},
{ id: 1271,name:'غفبلا',category:'مواد غذائية',price:75000,pngExist:1},
{ id: 1273,name:'damla sour belt',category:'سكاكر',price:15000,pngExist:1},
{ id: 1290,name:'دخان ديفيدوف ابيض رفيع',category:'دخان',price:255000,pngExist:1},
{ id: 1307,name:'cudbury oroe',category:'سكاكر',price:50000,pngExist:1},
{ id: 1351,name:'alpella nuga bar 35g',category:'سكاكر',price:25000,pngExist:1},
{ id: 1365,name:'halley beyaz cikolatali',category:'سكاكر',price:160000,pngExist:1},
{ id: 1371,name:'milka حليب',category:'سكاكر',price:110000,pngExist:1},
{ id: 1384,name:'adicto intense',category:'سكاكر',price:50000,pngExist:1},
{ id: 1390,name:'kinder country',category:'سكاكر',price:50000,pngExist:1},
{ id: 1392,name:'mentos orange ice',category:'سكاكر',price:40000,pngExist:1},
{ id: 1395,name:'mentos rule نعناع ',category:'سكاكر',price:35000,pngExist:1},
{ id: 1398,name:'wafe up',category:'سكاكر',price:105000,pngExist:1},
{ id: 1399,name:'piko chocolate',category:'مشروبات',price:30000,pngExist:1},
{ id: 1406,name:'rim 1.5l',category:'مياه',price:30000,pngExist:1},
{ id: 1407,name:'eti gold',category:'سكاكر',price:35000,pngExist:1},
{ id: 1431,name:'pik one ch',category:'سكاكر',price:40000,pngExist:1},
{ id: 1456,name:'طربوش غندور *4',category:'سكاكر',price:90000,pngExist:1},
{ id: 1466,name:'roshen cocoa',category:'أجبان',price:55000,pngExist:1},
{ id: 1489,name:'كيك اولالا سوفلي ',category:'سكاكر',price:80000,pngExist:1},
{ id: 1500,name:'master sitos جبنةمم',category:'سكاكر',price:25000,pngExist:1},
{ id: 1539,name:'كعك تنور العصر',category:'مواد غذائية',price:110000,pngExist:1},
{ id: 1548,name:'ozmo burger',category:'سكاكر',price:55000,pngExist:1},
{ id: 1552,name:'عيدان مالح crax',category:'سكاكر',price:35000,pngExist:1},
{ id: 1554,name:'kinder maxi',category:'سكاكر',price:40000,pngExist:1},
{ id: 1558,name:'milka oreostrw',category:'سكاكر',price:110000,pngExist:1},
{ id: 1565,name:'nutella go',category:'سكاكر',price:150000,pngExist:1},
{ id: 1567,name:'kinder delice 2',category:'سكاكر',price:60000,pngExist:1},
{ id: 1601,name:'rich marie',category:'سكاكر',price:15000,pngExist:1},
{ id: 1699,name:'galaxy milk ',category:'سكاكر',price:70000,pngExist:1},
{ id: 1773,name:'unica white',category:'سكاكر',price:30000,pngExist:1},
{ id: 1774,name:'unica creamy vanillia ',category:'سكاكر',price:15000,pngExist:1},
{ id: 1775,name:'peanut signature ',category:'سكاكر',price:30000,pngExist:1},
{ id: 1776,name:'dark signature ',category:'سكاكر',price:30000,pngExist:1},
{ id: 1779,name:'hazelnut signature ',category:'سكاكر',price:30000,pngExist:1},
{ id: 1780,name:'tsipers icy flakes ',category:'سكاكر',price:15000,pngExist:1},
{ id: 1781,name:'tsipers choco crisps',category:'سكاكر',price:15000,pngExist:1},
{ id: 1782,name:'poppins honey flakes',category:'سكاكر',price:15000,pngExist:1},
{ id: 1783,name:'poppins frosted flakes ',category:'سكاكر',price:15000,pngExist:1},
{ id: 1784,name:'choco bits ',category:'سكاكر',price:15000,pngExist:1},
{ id: 1785,name:'big bang white chocolate ',category:'سكاكر',price:15000,pngExist:1},
{ id: 1786,name:'big bang ,ilk chocolate ',category:'سكاكر',price:15000,pngExist:1},
{ id: 1788,name:'big bamg choco flakes ',category:'سكاكر',price:15000,pngExist:1},
{ id: 1790,name:'قداحة خفيف',category:'دخان',price:20000,pngExist:1},
{ id: 1895,name:'شانكي',category:'سكاكر',price:70000,pngExist:1},
{ id: 1913,name:'go fresh',category:'سكاكر',price:30000,pngExist:1},
{ id: 1950,name:'هولز شركة',category:'سكاكر',price:35000,pngExist:1},
{ id: 1951,name:'هولز شركة ازرق',category:'سكاكر',price:30000,pngExist:1},
{ id: 1956,name:'مصيصه chupa chups',category:'سكاكر',price:15000,pngExist:1},
{ id: 1957,name:'mentos 3d نعنع',category:'سكاكر',price:30000,pngExist:1},
{ id: 1984,name:'قلوبات اكسترا',category:'بزورات',price:1000000,pngExist:1},
{ id: 2000,name:'nakla 250 g',category:'دخان',price:350000,pngExist:1},
{ id: 2012,name:'sitos وسط بصل مكرمل',category:'سكاكر',price:25000,pngExist:1},
{ id: 2049,name:'جبنة مشكل',category:'أجبان',price:400000,pngExist:1},
{ id: 2076,name:'مزايا كف',category:'دخان',price:530000,pngExist:1},
{ id: 2093,name:'brilliant slim',category:'دخان',price:100000,pngExist:1},
{ id: 2104,name:'damla سور',category:'سكاكر',price:15000,pngExist:1},
{ id: 2106,name:'mentos',category:'سكاكر',price:35000,pngExist:1},
{ id: 2126,name:'okay caramel0 ',category:'سكاكر',price:20000,pngExist:1},
{ id: 2140,name:'كف مزايا حامض ونعنع',category:'دخان',price:620000,pngExist:1},
{ id: 2148,name:'ديروني رز مصري',category:'حبوب',price:90000,pngExist:1},
{ id: 2177,name:'pringles 165g original',category:'سكاكر',price:190000,pngExist:1},
{ id: 2179,name:'pringles 165g sour cream and onion',category:'سكاكر',price:190000,pngExist:1},
{ id: 2198,name:'okay strawbery ',category:'سكاكر',price:20000,pngExist:1},
{ id: 2212,name:'choco balls ',category:'سكاكر',price:15000,pngExist:1},
{ id: 2237,name:'gauloise احمر',category:'دخان',price:130000,pngExist:1},
{ id: 2238,name:'فحم يحيى 1ك',category:'دخان',price:270000,pngExist:1},
{ id: 2239,name:'ماري سادة',category:'سكاكر',price:30000,pngExist:1},
{ id: 2241,name:'mastro peanut  ',category:'سكاكر',price:20000,pngExist:1},
{ id: 2243,name:'اكلير برو',category:'مواد أولية',price:100000,pngExist:1},
{ id: 2262,name:'اندومي خضار جمبو س',category:'مواد غذائية',price:40000,pngExist:1},
{ id: 2293,name:'cote d dor05',category:'سكاكر',price:100000,pngExist:1},
{ id: 2296,name:'جوردنيا موز',category:'سكاكر',price:20000,pngExist:1},
{ id: 2297,name:'جوردنيا زبدة',category:'سكاكر',price:20000,pngExist:1},
{ id: 2304,name:'nouba',category:'سكاكر',price:25000,pngExist:1},
{ id: 2314,name:'ETi wanted',category:'سكاكر',price:30000,pngExist:1},
{ id: 2315,name:'ETi adicto gourmet',category:'سكاكر',price:45000,pngExist:1},
{ id: 2319,name:'TWIRL ',category:'سكاكر',price:110000,pngExist:1},
{ id: 2325,name:'ozmo mello',category:'سكاكر',price:30000,pngExist:1},
{ id: 2327,name:'بريك 4 اصابع',category:'سكاكر',price:25000,pngExist:1},
{ id: 2335,name:'سانيتا الباشا',category:'دخان',price:40000,pngExist:1},
{ id: 2368,name:'dolsi بيتزا كبير',category:'سكاكر',price:60000,pngExist:1},
{ id: 2369,name:'dolsi كتشب كبير',category:'سكاكر',price:60000,pngExist:1},
{ id: 2370,name:'dolsi مشاوي كبير',category:'سكاكر',price:60000,pngExist:1},
{ id: 2372,name:'dolsi جبنة كبير',category:'سكاكر',price:60000,pngExist:1},
{ id: 2421,name:'biscolata due max hazelnut',category:'سكاكر',price:55000,pngExist:1},
{ id: 2426,name:'pop cake',category:'سكاكر',price:35000,pngExist:1},
{ id: 2439,name:'biscolata moodd',category:'سكاكر',price:70000,pngExist:1},
{ id: 2460,name:'dabke lukum',category:'سكاكر',price:15000,pngExist:1},
{ id: 2467,name:'براوني intense',category:'سكاكر',price:55000,pngExist:1},
{ id: 2479,name:'dolsi خل كبير',category:'سكاكر',price:60000,pngExist:1},
{ id: 2480,name:'dolsi فستق كبير',category:'سكاكر',price:60000,pngExist:1},
{ id: 2481,name:'winston silver رفيع',category:'دخان',price:260000,pngExist:1},
{ id: 2486,name:'BEBETO watermelon',category:'سكاكر',price:75000,pngExist:1},
{ id: 2487,name:'BEBETO pink&white',category:'سكاكر',price:75000,pngExist:1},
{ id: 2489,name:'BEBETO roller',category:'سكاكر',price:75000,pngExist:1},
{ id: 2495,name:'BEBETO sour worms',category:'سكاكر',price:75000,pngExist:1},
{ id: 2496,name:'BEBETO ocean park',category:'سكاكر',price:75000,pngExist:1},
{ id: 2498,name:'BEBETO berries',category:'سكاكر',price:75000,pngExist:1},
{ id: 2510,name:'joocyz mango',category:'مشروبات',price:20000,pngExist:1},
{ id: 2512,name:'joocyz apple',category:'مشروبات',price:20000,pngExist:1},
{ id: 2515,name:'cookies gandour ',category:'سكاكر',price:40000,pngExist:1},
{ id: 2516,name:'lucky 555 choco',category:'سكاكر',price:20000,pngExist:1},
{ id: 2521,name:'ملح fine sea',category:'مواد غذائية',price:20000,pngExist:1},
{ id: 2537,name:'master coctail',category:'سكاكر',price:50000,pngExist:1},
{ id: 2539,name:'dolsi pista',category:'مياه',price:20000,pngExist:1},
{ id: 2540,name:'dolsi novita',category:'مياه',price:20000,pngExist:1},
{ id: 2541,name:'dolsi chocoloco',category:'مياه',price:50000,pngExist:1},
{ id: 2542,name:'dolsi maxibon',category:'مياه',price:70000,pngExist:1},
{ id: 2544,name:'dolsi choco locco',category:'مياه',price:70000,pngExist:1},
{ id: 2546,name:'dolsi kashta',category:'مياه',price:80000,pngExist:1},
{ id: 2548,name:'dolsi cappriccio',category:'مياه',price:70000,pngExist:1},
{ id: 2551,name:'dolsi cupra',category:'مياه',price:70000,pngExist:1},
{ id: 2558,name:'pringles cheese',category:'سكاكر',price:190000,pngExist:1},
{ id: 2572,name:'wafe up hazelnut',category:'سكاكر',price:45000,pngExist:1},
{ id: 2574,name:'eti gong herbs',category:'سكاكر',price:40000,pngExist:1},
{ id: 2575,name:'eti gong cheese',category:'سكاكر',price:40000,pngExist:1},
{ id: 2576,name:'eti gong honey',category:'سكاكر',price:40000,pngExist:1},
{ id: 2621,name:'gardena hazelnut',category:'سكاكر',price:65000,pngExist:1},
{ id: 2623,name:'gardena sandwish dark choco',category:'سكاكر',price:50000,pngExist:1},
{ id: 2624,name:'gardena sandwish milk vanilla',category:'سكاكر',price:50000,pngExist:1},
{ id: 2633,name:'extra peppermint',category:'سكاكر',price:45000,pngExist:1},
{ id: 2636,name:'extra white',category:'سكاكر',price:45000,pngExist:1},
{ id: 2639,name:'علكه غندور مستكه',category:'سكاكر',price:10000,pngExist:1},
{ id: 2640,name:'علكه غندور فواكه',category:'سكاكر',price:10000,pngExist:1},
{ id: 2642,name:'pik one',category:'سكاكر',price:15000,pngExist:1},
{ id: 2643,name:'dounat yamama',category:'سكاكر',price:30000,pngExist:1},
{ id: 2647,name:'دوفيدوف قديم',category:'دخان',price:250000,pngExist:1},
{ id: 2649,name:'اندومي دوبل',category:'مواد غذائية',price:25000,pngExist:1},
{ id: 2660,name:'joocyzاناناس',category:'مشروبات',price:20000,pngExist:1},
{ id: 2705,name:'biscolata stars ',category:'سكاكر',price:45000,pngExist:1},
{ id: 2715,name:'FLAKE',category:'سكاكر',price:35000,pngExist:1},
{ id: 2717,name:'lovita milk',category:'سكاكر',price:115000,pngExist:1},
{ id: 2721,name:'haribo happy-cola',category:'سكاكر',price:10000,pngExist:1},
{ id: 2723,name:'jordina swiss roll',category:'سكاكر',price:90000,pngExist:1},
{ id: 2741,name:'mentos sour fruite',category:'سكاكر',price:35000,pngExist:1},
{ id: 2742,name:'wanted pops ',category:'سكاكر',price:30000,pngExist:1},
{ id: 2763,name:'شعير كبير ',category:'مواد غذائية',price:75000,pngExist:1},
{ id: 2766,name:'safari',category:'سكاكر',price:15000,pngExist:1},
{ id: 2779,name:'halley mini ',category:'سكاكر',price:120000,pngExist:1},
{ id: 2787,name:'علكة عيون',category:'سكاكر',price:15000,pngExist:1},
{ id: 2791,name:'roshen hazl',category:'سكاكر',price:55000,pngExist:1},
{ id: 2792,name:'unica 33%',category:'سكاكر',price:15000,pngExist:1},
{ id: 2820,name:'digestive dark chocolate gandour ',category:'سكاكر',price:155000,pngExist:1},
{ id: 2822,name:'poppins honey flakes 350g ',category:'سكاكر',price:360000,pngExist:1},
{ id: 2824,name:'choco  bits ',category:'سكاكر',price:360000,pngExist:1},
{ id: 2825,name:'choco bumps 350g +20%',category:'سكاكر',price:255000,pngExist:1},
{ id: 2826,name:'marlboro crafted compact blue',category:'دخان',price:100000,pngExist:1},
{ id: 2890,name:'mentos water melon mini',category:'سكاكر',price:105000,pngExist:1},
{ id: 2891,name:'mentos strawbery mini ',category:'سكاكر',price:105000,pngExist:1},
{ id: 2892,name:'mentos  bubble mini ',category:'سكاكر',price:105000,pngExist:1},
{ id: 2893,name:'mentos fresh mint mini ',category:'سكاكر',price:105000,pngExist:1},
{ id: 2909,name:'milka oreo w',category:'سكاكر',price:110000,pngExist:1},
{ id: 2921,name:'snacks',category:'سكاكر',price:65000,pngExist:1},
{ id: 2966,name:'nescafe 2 in 1',category:'سكاكر',price:20000,pngExist:1},
{ id: 2974,name:'yamama love choco',category:'سكاكر',price:35000,pngExist:1},
{ id: 2977,name:'yamama roll',category:'سكاكر',price:30000,pngExist:1},
{ id: 2993,name:'skittles yellow',category:'سكاكر',price:60000,pngExist:1},
{ id: 2996,name:'gofret orange 142g',category:'سكاكر',price:90000,pngExist:1},
{ id: 3011,name:'loacker sandwish hazelnut 25g',category:'سكاكر',price:50000,pngExist:1},
{ id: 3014,name:'ذرة',category:'بزورات',price:360000,pngExist:1},
{ id: 3020,name:'dark 330 ',category:'مشروبات',price:45000,pngExist:1},
{ id: 3033,name:'سانيتا رول al basha',category:'دخان',price:50000,pngExist:1},
{ id: 3045,name:'maggi  دجاج *8',category:'مواد غذائية',price:35000,pngExist:1},
{ id: 3080,name:'halley roll  جديد',category:'سكاكر',price:180000,pngExist:1},
{ id: 3087,name:'loacker sandiwsh choco',category:'سكاكر',price:50000,pngExist:1},
{ id: 3099,name:'biscolate milk cream m',category:'سكاكر',price:25000,pngExist:1},
{ id: 3113,name:'poppins choco pops ',category:'سكاكر',price:15000,pngExist:1},
{ id: 3144,name:'mentos fresh ',category:'سكاكر',price:35000,pngExist:1},
{ id: 3165,name:'pringles paprika كبير',category:'سكاكر',price:190000,pngExist:1},
{ id: 3167,name:'nutella bag ',category:'سكاكر',price:410000,pngExist:1},
{ id: 3169,name:'biscoff roll',category:'سكاكر',price:180000,pngExist:1},
{ id: 3170,name:'happy jo',category:'سكاكر',price:40000,pngExist:1},
{ id: 3171,name:'mallow pop marshmello',category:'سكاكر',price:70000,pngExist:1},
{ id: 3172,name:'toren coconut',category:'سكاكر',price:35000,pngExist:1},
{ id: 3173,name:'toren lemon',category:'سكاكر',price:35000,pngExist:1},
{ id: 3174,name:'toren orange',category:'سكاكر',price:35000,pngExist:1},
{ id: 3175,name:'jordina dream choco',category:'سكاكر',price:20000,pngExist:1},
{ id: 3187,name:'no :1 bllack',category:'سكاكر',price:25000,pngExist:1},
{ id: 3197,name:'lovita cocoa',category:'سكاكر',price:115000,pngExist:1},
{ id: 3266,name:'croisant al asr cheese ',category:'سكاكر',price:40000,pngExist:1},
{ id: 3328,name:'oreo original *4',category:'سكاكر',price:35000,pngExist:1},
{ id: 3358,name:'علكة غندور ',category:'سكاكر',price:10000,pngExist:1},
{ id: 3378,name:'ذره white bell',category:'مواد غذائية',price:115000,pngExist:1},
{ id: 3422,name:'cedars silver line',category:'دخان',price:70000,pngExist:1},
{ id: 3438,name:'crunch milk',category:'سكاكر',price:60000,pngExist:1},
{ id: 3467,name:'poppins cookies',category:'سكاكر',price:15000,pngExist:1},
{ id: 3481,name:'حمص ابو عرب',category:'مواد غذائية',price:150000,pngExist:1},
{ id: 3483,name:'masterb كبييير ملح ',category:'سكاكر',price:90000,pngExist:1},
{ id: 3484,name:'master كبييير باربكيو',category:'سكاكر',price:90000,pngExist:1},
{ id: 3489,name:'ظرف cocoa granule',category:'مواد غذائية',price:15000,pngExist:1},
{ id: 3510,name:'milkaa بندق',category:'سكاكر',price:110000,pngExist:1},
{ id: 3554,name:'snickers new',category:'سكاكر',price:60000,pngExist:1},
{ id: 3561,name:'rim 0.5l',category:'مياه',price:20000,pngExist:1},
{ id: 3564,name:'صندوق rim 1.5 l',category:'مياه',price:165000,pngExist:1},
{ id: 3581,name:'hazelnut wooly booly',category:'سكاكر',price:15000,pngExist:1},
{ id: 3582,name:'dark wooly booly',category:'سكاكر',price:15000,pngExist:1},
{ id: 3583,name:'choco wooly booly',category:'سكاكر',price:15000,pngExist:1},
{ id: 3650,name:'ness 1',category:'سكاكر',price:25000,pngExist:1},
{ id: 3656,name:'ness 1 فستق حلبي ',category:'سكاكر',price:25000,pngExist:1},
{ id: 3671,name:'elegace silver',category:'دخان',price:50000,pngExist:1},
{ id: 3681,name:'digestive deemah',category:'سكاكر',price:45000,pngExist:1},
{ id: 3685,name:'master حر كبير',category:'سكاكر',price:90000,pngExist:1},
{ id: 3687,name:'jellygum grape',category:'سكاكر',price:15000,pngExist:1},
{ id: 3701,name:'دارك بلوو 500م',category:'سكاكر',price:60000,pngExist:1},
{ id: 3723,name:'اونيكا ماكس',category:'سكاكر',price:35000,pngExist:1},
{ id: 3743,name:'ظرف ماجي خضار الربيع 1',category:'مواد غذائية',price:65000,pngExist:1},
{ id: 3744,name:'ظرف ماجي الدجاج12',category:'مواد غذائية',price:55000,pngExist:1},
{ id: 3768,name:'ozmo poxi ',category:'سكاكر',price:30000,pngExist:1},
{ id: 3786,name:'milka red',category:'سكاكر',price:120000,pngExist:1},
{ id: 3797,name:'buldak pink',category:'سكاكر',price:160000,pngExist:1},
{ id: 3798,name:'لوتس 2 حبة',category:'سكاكر',price:35000,pngExist:1},
{ id: 3808,name:'منتوس فانتا',category:'سكاكر',price:55000,pngExist:1},
{ id: 3811,name:'ميكس كاجي ',category:'سكاكر',price:25000,pngExist:1},
{ id: 3831,name:'اكوافينا 0.6 ل',category:'مياه',price:20000,pngExist:1},
{ id: 3833,name:'اكوافينا 1.5 ل',category:'مياه',price:30000,pngExist:1},
{ id: 3847,name:'master sitos kbir',category:'سكاكر',price:90000,pngExist:1},
{ id: 3926,name:'kinder happy',category:'سكاكر',price:70000,pngExist:1},
{ id: 3927,name:'day break',category:'سكاكر',price:30000,pngExist:1},
{ id: 3929,name:'biskrem بندق',category:'سكاكر',price:50000,pngExist:1},
{ id: 3932,name:'milka فراولة',category:'سكاكر',price:110000,pngExist:1},
{ id: 3951,name:'master حر سيتوس كبير ',category:'مواد غذائية',price:90000,pngExist:1},
{ id: 4061,name:'leo go 1',category:'سكاكر',price:90000,pngExist:1},
{ id: 4064,name:'m and m شوكولا',category:'سكاكر',price:90000,pngExist:1},
{ id: 4066,name:'milka سادة...',category:'سكاكر',price:110000,pngExist:1},
{ id: 4068,name:'milka luflee ',category:'سكاكر',price:110000,pngExist:1},
{ id: 4069,name:'milka riso',category:'سكاكر',price:110000,pngExist:1},
{ id: 4088,name:'popel coakie ',category:'سكاكر',price:20000,pngExist:1},
{ id: 4089,name:'ثلج 1k',category:'مياه',price:30000,pngExist:1},
{ id: 4116,name:'poppins choco pops 438g',category:'سكاكر',price:255000,pngExist:1},
{ id: 4128,name:'ملبورو كرفت رفيع',category:'دخان',price:100000,pngExist:1},
{ id: 4134,name:'baunty dobel',category:'سكاكر',price:50000,pngExist:1},
{ id: 4137,name:'okay oreoo',category:'سكاكر',price:20000,pngExist:1},
{ id: 4148,name:'crumbz حبنة',category:'سكاكر',price:40000,pngExist:1},
{ id: 4149,name:'crumbz ملح',category:'سكاكر',price:40000,pngExist:1},
{ id: 4150,name:'crumbz حار',category:'سكاكر',price:40000,pngExist:1},
{ id: 4151,name:'crumbz باربيكيو',category:'سكاكر',price:40000,pngExist:1},
{ id: 4213,name:'galaxy flutes 1',category:'سكاكر',price:25000,pngExist:1},
{ id: 4244,name:'لبنة 0.5 عبد الساتر',category:'ألبان',price:200000,pngExist:1},
{ id: 4250,name:'اندومي hazir noodle',category:'مواد غذائية',price:25000,pngExist:1},
{ id: 4257,name:'مبسم اركيلة النخلة',category:'دخان',price:40000,pngExist:1},
{ id: 4279,name:'master 1dollar كوكتيل',category:'سكاكر',price:90000,pngExist:1},
{ id: 4284,name:'ماستر صغير سيتوسييصل',category:'سكاكر',price:10000,pngExist:1},
{ id: 4301,name:'snips 100000 curls chees',category:'سكاكر',price:100000,pngExist:1},
{ id: 4310,name:'ماستر بفيز كبييير فستق',category:'سكاكر',price:75000,pngExist:1},
{ id: 4438,name:'بيسكريم شركة',category:'سكاكر',price:55000,pngExist:1},
{ id: 4453,name:'kinder happy hippo',category:'سكاكر',price:30000,pngExist:1},
{ id: 4470,name:'بونجيس orange 6حبات',category:'مشروبات',price:70000,pngExist:1},
{ id: 4476,name:'جيلتين',category:'بزورات',price:500000,pngExist:1},
{ id: 4492,name:'سمسمية habbal',category:'سكاكر',price:60000,pngExist:1},
{ id: 4530,name:'master salt كبير',category:'سكاكر',price:90000,pngExist:1},
{ id: 4544,name:'شوكولا دبي برو',category:'مواد أولية',price:250000,pngExist:1},
{ id: 4574,name:'مارشميلو ',category:'بزورات',price:500000,pngExist:1}
];
