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
nfunction disableButton()
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
{ name: '����'},
{ name: '�����'},
{ name: '����������'},
{ name: '������'},
{ name: '���� �����'},
{ name: '�����'},
{ name: '������'},
{ name: '�����'},
{ name: '�����'},
{ name: '���� ������'},
{ name: '�������'},
{ name: '������'},
{ name: '���� ����'},
{ name: '����'},
{ name: '����'}
];
const products=
[
{ id: 1,name:'���� ����� 660�',category:'���� ������',price:170000,pngExist:1},
{ id: 3,name:'������ ���������������',category:'�����',price:80000,pngExist:1},
{ id: 4,name:'������ ������� � �����',category:'�����',price:80000,pngExist:1},
{ id: 5,name:'������ ������� �������',category:'�����',price:80000,pngExist:1},
{ id: 6,name:'������ ������� � �����',category:'�����',price:80000,pngExist:1},
{ id: 7,name:'������ ������� ������ ����',category:'�����',price:80000,pngExist:1},
{ id: 8,name:'������ ������� ������',category:'�����',price:80000,pngExist:1},
{ id: 9,name:'������ ������� ���� ������',category:'�����',price:80000,pngExist:1},
{ id: 11,name:'������� 400����',category:'���� ������',price:620000,pngExist:1},
{ id: 13,name:'����� ���������',category:'������',price:90000,pngExist:1},
{ id: 15,name:'jordina panda',category:'�����',price:20000,pngExist:1},
{ id: 16,name:'jordina choco cake',category:'�����',price:15000,pngExist:1},
{ id: 17,name:'jordina super roll',category:'�����',price:15000,pngExist:1},
{ id: 22,name:'������ ��� �� 1000��',category:'���� ������',price:390000,pngExist:1},
{ id: 23,name:'������ ��� �� 500��',category:'���� ������',price:180000,pngExist:1},
{ id: 25,name:'������� 200 ����',category:'���� ������',price:250000,pngExist:1},
{ id: 26,name:'������� 400����',category:'�������',price:555000,pngExist:1},
{ id: 27,name:'��� ���� ���� 1 ����',category:'���� ������',price:495000,pngExist:1},
{ id: 28,name:'��� ���� ���� 2 ����',category:'���� ������',price:980000,pngExist:1},
{ id: 32,name:'��� ������ 3����',category:'���� ������',price:1800000,pngExist:1},
{ id: 35,name:'���� �����',category:'���� ����',price:80000,pngExist:1},
{ id: 39,name:'��� ���',category:'������',price:100000,pngExist:1},
{ id: 42,name:'����� ��� ����',category:'���� ������',price:40000,pngExist:1},
{ id: 43,name:'��� �����',category:'���� ����',price:20000,pngExist:1},
{ id: 44,name:'����� ����� ���',category:'���� ������',price:20000,pngExist:1},
{ id: 45,name:'����� ��� ���',category:'���� ������',price:20000,pngExist:1},
{ id: 46,name:'����� ��� ����',category:'���� ������',price:20000,pngExist:1},
{ id: 47,name:'����� ��� ���',category:'���� ������',price:20000,pngExist:1},
{ id: 48,name:'����� ��� ������',category:'���� ������',price:20000,pngExist:1},
{ id: 49,name:'����� ��� �������',category:'���� ������',price:20000,pngExist:1},
{ id: 50,name:'����� ��� ��������',category:'���� ������',price:20000,pngExist:1},
{ id: 51,name:'����� ��� ������',category:'���� ������',price:20000,pngExist:1},
{ id: 53,name:'������ ����300����',category:'�����',price:300000,pngExist:1},
{ id: 54,name:'������ ������ ����',category:'���� ������',price:70000,pngExist:1},
{ id: 55,name:'coffee creamer400g',category:'���� ������',price:110000,pngExist:1},
{ id: 57,name:'����� 1200��',category:'������',price:95000,pngExist:1},
{ id: 59,name:'����600��',category:'������',price:85000,pngExist:1},
{ id: 60,name:'����� 250����',category:'�����',price:60000,pngExist:1},
{ id: 64,name:'rambo',category:'������',price:245000,pngExist:1},
{ id: 67,name:'���� deroni��',category:'���� ������',price:135000,pngExist:1},
{ id: 68,name:'��� deroni ',category:'���� ������',price:135000,pngExist:1},
{ id: 70,name:'����� �����4�',category:'������',price:315000,pngExist:1},
{ id: 74,name:'������ 75�',category:'���� ������',price:30000,pngExist:1},
{ id: 77,name:'������ ���� 75�',category:'���� ������',price:25000,pngExist:1},
{ id: 80,name:'���� xtra 2.2;',category:'���� ������',price:300000,pngExist:1},
{ id: 83,name:'������9 ����  ',category:'���� ����',price:90000,pngExist:1},
{ id: 84,name:'����� 8',category:'���� ����',price:60000,pngExist:1},
{ id: 86,name:'����� ���',category:'������',price:45000,pngExist:1},
{ id: 87,name:'��� �������',category:'������',price:85000,pngExist:1},
{ id: 88,name:'������� reggia',category:'���� ������',price:45000,pngExist:1},
{ id: 91,name:'��� �����',category:'���� ������',price:60000,pngExist:1},
{ id: 92,name:'������ ����� ����',category:'���� ������',price:55000,pngExist:1},
{ id: 93,name:'��� pearl',category:'���� ������',price:20000,pngExist:1},
{ id: 94,name:'������ �����850 ���� ',category:'���� ������',price:110000,pngExist:1},
{ id: 95,name:'��� �����850',category:'���� ������',price:110000,pngExist:1},
{ id: 96,name:'��� ����� 400����',category:'���� ������',price:50000,pngExist:1},
{ id: 97,name:'��� �� ��� ����� 400 ����',category:'���� ������',price:55000,pngExist:1},
{ id: 98,name:'��� �� �����',category:'���� ������',price:65000,pngExist:1},
{ id: 99,name:'��� �� ��� ����� 600 ����',category:'���� ������',price:75000,pngExist:1},
{ id: 100,name:'��� ����� 600����',category:'���� ������',price:75000,pngExist:1},
{ id: 102,name:'����� ������',category:'����',price:25000,pngExist:1},
{ id: 104,name:'������ dollys 250ml',category:'���� ������',price:125000,pngExist:1},
{ id: 106,name:'���� ���� 1 �',category:'���� ������',price:180000,pngExist:1},
{ id: 107,name:'���� ��� 340�',category:'���� ������',price:90000,pngExist:1},
{ id: 108,name:'���� ���� 340',category:'���� ������',price:90000,pngExist:1},
{ id: 110,name:'���� ��� 200�',category:'���� ������',price:65000,pngExist:1},
{ id: 111,name:'nutella630g',category:'���� ������',price:560000,pngExist:1},
{ id: 112,name:'nutella400�',category:'���� ������',price:350000,pngExist:1},
{ id: 113,name:'panino ',category:'�����',price:15000,pngExist:1},
{ id: 114,name:'��� ����� glendy',category:'���� ������',price:60000,pngExist:1},
{ id: 136,name:'���� ��� 1����',category:'�������',price:110000,pngExist:1},
{ id: 137,name:'��� deroni',category:'���� ������',price:75000,pngExist:1},
{ id: 144,name:'��� ���-250ml',category:'�������',price:80000,pngExist:1},
{ id: 152,name:'��� bell food-5 ����',category:'���� ������',price:590000,pngExist:1},
{ id: 154,name:'����� - 500 ����',category:'�����',price:115000,pngExist:1},
{ id: 161,name:'���� ������-���� 600 ����',category:'�����',price:525000,pngExist:1},
{ id: 181,name:'���� 2250',category:'�������',price:135000,pngExist:1},
{ id: 182,name:'��� ��2250',category:'�������',price:135000,pngExist:1},
{ id: 184,name:'���� 1250 �� ����',category:'�������',price:110000,pngExist:1},
{ id: 186,name:'���1250',category:'�������',price:110000,pngExist:1},
{ id: 202,name:'��� �� ����330',category:'�������',price:50000,pngExist:1},
{ id: 221,name:'pipore',category:'���� ������',price:120000,pngExist:1},
{ id: 311,name:'jordina red',category:'�����',price:25000,pngExist:1},
{ id: 312,name:'jordina blue ',category:'�����',price:20000,pngExist:1},
{ id: 319,name:'������ eco',category:'����������',price:60000,pngExist:1},
{ id: 342,name:'��� ������ 0.5�',category:'���� ������',price:390000,pngExist:1},
{ id: 351,name:'���� ���� dual1kg',category:'���� ������',price:225000,pngExist:1},
{ id: 376,name:'domo mug cakechoco',category:'���� ������',price:55000,pngExist:1},
{ id: 377,name:'domo mug cake choco karmel',category:'���� ������',price:55000,pngExist:1},
{ id: 378,name:'domo choco haz mug cake',category:'���� ������',price:55000,pngExist:1},
{ id: 379,name:'������ ���',category:'�����',price:90000,pngExist:1},
{ id: 386,name:'���� clorets�������',category:'�����',price:30000,pngExist:1},
{ id: 388,name:'���� clorest ����� ����',category:'�����',price:30000,pngExist:1},
{ id: 390,name:'���� clorest����',category:'�����',price:30000,pngExist:1},
{ id: 394,name:'������ ����',category:'�����',price:60000,pngExist:1},
{ id: 400,name:'Ice Coffee Black',category:'�������',price:65000,pngExist:1},
{ id: 402,name:'M&M chocolate',category:'�����',price:70000,pngExist:1},
{ id: 405,name:'����� ���� ���',category:'�����',price:65000,pngExist:1},
{ id: 406,name:'ozmo ����',category:'�����',price:50000,pngExist:1},
{ id: 408,name:'������ �����',category:'�����',price:25000,pngExist:1},
{ id: 410,name:'������ ���',category:'�����',price:20000,pngExist:1},
{ id: 412,name:'albeni 30%',category:'�����',price:35000,pngExist:1},
{ id: 416,name:'albeni ���',category:'�����',price:55000,pngExist:1},
{ id: 418,name:'albeni ���',category:'�����',price:60000,pngExist:1},
{ id: 422,name:'ozmo ����',category:'�����',price:90000,pngExist:1},
{ id: 424,name:'ozmo club',category:'�����',price:65000,pngExist:1},
{ id: 427,name:'���� �����',category:'�����',price:15000,pngExist:1},
{ id: 440,name:'digestive choco',category:'�����',price:90000,pngExist:1},
{ id: 445,name:'damla ch',category:'�����',price:15000,pngExist:1},
{ id: 452,name:'���� ������ 3dp',category:'�����',price:30000,pngExist:1},
{ id: 453,name:'���� ������ 3d�',category:'�����',price:30000,pngExist:1},
{ id: 454,name:'������ ice n',category:'�����',price:50000,pngExist:1},
{ id: 455,name:'������ ice n2',category:'�����',price:50000,pngExist:1},
{ id: 456,name:'������ ice r',category:'�����',price:50000,pngExist:1},
{ id: 460,name:'hanimeller',category:'�����',price:45000,pngExist:1},
{ id: 461,name:'kombo',category:'�����',price:45000,pngExist:1},
{ id: 462,name:'wafe up b',category:'�����',price:110000,pngExist:1},
{ id: 466,name:'leo',category:'�����',price:65000,pngExist:1},
{ id: 485,name:'��� libanlait 1 kg',category:'�����',price:170000,pngExist:1},
{ id: 486,name:'��� libanlait 2 kg',category:'�����',price:300000,pngExist:1},
{ id: 487,name:'candyup choc',category:'�����',price:35000,pngExist:1},
{ id: 488,name:'candy up fraise',category:'�����',price:35000,pngExist:1},
{ id: 489,name:'����� ����',category:'�����',price:50000,pngExist:1},
{ id: 494,name:'kinder joy p',category:'�����',price:80000,pngExist:1},
{ id: 500,name:'metro 40%',category:'�����',price:35000,pngExist:1},
{ id: 508,name:'unica ',category:'�����',price:15000,pngExist:1},
{ id: 509,name:'unica black',category:'�����',price:15000,pngExist:1},
{ id: 510,name:'unica big',category:'�����',price:40000,pngExist:1},
{ id: 511,name:'yamama brownie',category:'�����',price:35000,pngExist:1},
{ id: 516,name:'granolies p',category:'�����',price:40000,pngExist:1},
{ id: 517,name:'granolies oreo',category:'�����',price:40000,pngExist:1},
{ id: 518,name:'granolies choco',category:'�����',price:40000,pngExist:1},
{ id: 524,name:'dabke original',category:'�����',price:15000,pngExist:1},
{ id: 525,name:'yan yan',category:'�����',price:80000,pngExist:1},
{ id: 526,name:'mastro kappa',category:'�����',price:20000,pngExist:1},
{ id: 532,name:'nesquik',category:'�����',price:35000,pngExist:1},
{ id: 534,name:'no 1',category:'�����',price:30000,pngExist:1},
{ id: 538,name:'pringles 40g orignal',category:'�����',price:90000,pngExist:1},
{ id: 540,name:'pringles 40g sour and onion',category:'�����',price:80000,pngExist:1},
{ id: 541,name:'pringles 40g hot and spicy',category:'�����',price:90000,pngExist:1},
{ id: 553,name:'ulker  kakaolu',category:'�����',price:60000,pngExist:1},
{ id: 554,name:'saklikoy',category:'�����',price:50000,pngExist:1},
{ id: 555,name:'toren cocoa',category:'�����',price:35000,pngExist:1},
{ id: 557,name:'toren strawberry',category:'�����',price:35000,pngExist:1},
{ id: 559,name:'maltesers',category:'�����',price:70000,pngExist:1},
{ id: 564,name:'junior',category:'�����',price:35000,pngExist:1},
{ id: 565,name:'adicto ',category:'�����',price:40000,pngExist:1},
{ id: 567,name:'wafe up cocoa',category:'�����',price:45000,pngExist:1},
{ id: 568,name:'wafe up strawberry',category:'�����',price:45000,pngExist:1},
{ id: 569,name:'wafe up d choco',category:'�����',price:55000,pngExist:1},
{ id: 571,name:'gofret kakaolu',category:'�����',price:20000,pngExist:1},
{ id: 574,name:'tuttifrutti',category:'�����',price:40000,pngExist:1},
{ id: 575,name:'kitkat',category:'�����',price:60000,pngExist:1},
{ id: 577,name:'ulker ����� ����',category:'�����',price:80000,pngExist:1},
{ id: 581,name:'bounty ',category:'�����',price:80000,pngExist:1},
{ id: 583,name:'mars',category:'�����',price:60000,pngExist:1},
{ id: 584,name:'twix',category:'�����',price:60000,pngExist:1},
{ id: 585,name:'laviva',category:'�����',price:60000,pngExist:1},
{ id: 588,name:'torku',category:'�����',price:60000,pngExist:1},
{ id: 591,name:'twins',category:'�����',price:65000,pngExist:1},
{ id: 592,name:'biscolata duomax',category:'�����',price:55000,pngExist:1},
{ id: 596,name:'break',category:'�����',price:15000,pngExist:1},
{ id: 607,name:'master ���� �� ����',category:'�����',price:50000,pngExist:1},
{ id: 608,name:'master ���� ���',category:'�����',price:50000,pngExist:1},
{ id: 612,name:'master ���� ���',category:'�����',price:50000,pngExist:1},
{ id: 613,name:'master ���� ������� ',category:'�����',price:50000,pngExist:1},
{ id: 616,name:'master sitos ����',category:'�����',price:50000,pngExist:1},
{ id: 619,name:'master ���� ���� ����',category:'�����',price:50000,pngExist:1},
{ id: 620,name:'unica ���',category:'�����',price:120000,pngExist:1},
{ id: 634,name:'master ���� ��� �����',category:'�����',price:25000,pngExist:1},
{ id: 635,name:'master ���� ��� ����',category:'�����',price:25000,pngExist:1},
{ id: 641,name:'master ��� ���',category:'�����',price:25000,pngExist:1},
{ id: 643,name:'master ��� �������',category:'�����',price:25000,pngExist:1},
{ id: 644,name:'master ��� ���',category:'�����',price:25000,pngExist:1},
{ id: 645,name:'master ��� ���',category:'�����',price:25000,pngExist:1},
{ id: 654,name:'olala sufle',category:'�����',price:80000,pngExist:1},
{ id: 655,name:'���� �����',category:'�����',price:180000,pngExist:1},
{ id: 657,name:'dark blue',category:'�������',price:45000,pngExist:1},
{ id: 678,name:'snips ���� ���� ������',category:'�����',price:25000,pngExist:1},
{ id: 679,name:'snips ���� ���',category:'�����',price:50000,pngExist:1},
{ id: 680,name:'snips���� ���� ������',category:'�����',price:50000,pngExist:1},
{ id: 681,name:'snips ���� ��� �����',category:'�����',price:50000,pngExist:1},
{ id: 682,name:'snips ���� �� ����',category:'�����',price:50000,pngExist:1},
{ id: 691,name:'corn cobs30g',category:'�����',price:25000,pngExist:1},
{ id: 702,name:'���� ����',category:'���� ������',price:20000,pngExist:1},
{ id: 706,name:'���� 6���',category:'�����',price:130000,pngExist:1},
{ id: 712,name:'��� ������ ������',category:'���� ������',price:20000,pngExist:1},
{ id: 718,name:'biskrem 50%',category:'�����',price:70000,pngExist:1},
{ id: 723,name:'���� ����180� ������',category:'�������',price:15000,pngExist:1},
{ id: 724,name:'���� ���� ������ 180�',category:'�������',price:15000,pngExist:1},
{ id: 764,name:'��� ',category:'������',price:1000000,pngExist:1},
{ id: 775,name:'������� ��� ����300 ��',category:'���� ������',price:140000,pngExist:1},
{ id: 909,name:'7up 330ml ���',category:'�������',price:60000,pngExist:1},
{ id: 953,name:' ��� ���� 5 kg  ��� ����� ',category:'�����',price:330000,pngExist:1},
{ id: 955,name:'��� ����  2 kg  ',category:'�����',price:180000,pngExist:1},
{ id: 956,name:'��� ����  1 kg',category:'�����',price:100000,pngExist:1},
{ id: 957,name:'���� ���� 0.5 �',category:'�����',price:70000,pngExist:1},
{ id: 958,name:'��� ����',category:'������',price:350000,pngExist:1},
{ id: 959,name:'��� ����',category:'������',price:380000,pngExist:1},
{ id: 961,name:'����',category:'������',price:400000,pngExist:1},
{ id: 962,name:'����� ',category:'������',price:360000,pngExist:1},
{ id: 964,name:'��� ����',category:'������',price:500000,pngExist:1},
{ id: 966,name:'��� ����',category:'������',price:500000,pngExist:1},
{ id: 967,name:'������',category:'������',price:450000,pngExist:1},
{ id: 1012,name:'milka bubbly white',category:'�����',price:120000,pngExist:1},
{ id: 1013,name:'milka oreo choco',category:'�����',price:120000,pngExist:1},
{ id: 1014,name:'milka tuc',category:'�����',price:120000,pngExist:1},
{ id: 1018,name:'����� ����� ���',category:'����',price:70000,pngExist:1},
{ id: 1019,name:'����� ����� ����',category:'����',price:70000,pngExist:1},
{ id: 1020,name:'����� ��� ����',category:'����',price:70000,pngExist:1},
{ id: 1023,name:'��� ����',category:'����',price:150000,pngExist:1},
{ id: 1024,name:'��� ���',category:'����',price:150000,pngExist:1},
{ id: 1025,name:'����� ����',category:'����',price:65000,pngExist:1},
{ id: 1027,name:'��� ����� ����',category:'���� ������',price:80000,pngExist:1},
{ id: 1028,name:' ��� ���� ���� ',category:'���� ������',price:75000,pngExist:1},
{ id: 1029,name:'skittels prple',category:'�����',price:95000,pngExist:1},
{ id: 1033,name:'��� ����� ����� 6',category:'���� ������',price:75000,pngExist:1},
{ id: 1034,name:'��� ����� ���� 8',category:'���� ������',price:60000,pngExist:1},
{ id: 1054,name:'kraker',category:'�����',price:15000,pngExist:1},
{ id: 1058,name:'ozmo popsy',category:'�����',price:45000,pngExist:1},
{ id: 1073,name:'��� torabika',category:'�������',price:20000,pngExist:1},
{ id: 1074,name:'jordina 3 s',category:'�����',price:20000,pngExist:1},
{ id: 1079,name:'albeni tane tane',category:'�������',price:60000,pngExist:1},
{ id: 1112,name:'���� ������',category:'�����',price:25000,pngExist:1},
{ id: 1113,name:'��� ����',category:'�����',price:90000,pngExist:1},
{ id: 1117,name:'rulokat 9',category:'�����',price:45000,pngExist:1},
{ id: 1119,name:'haylayf',category:'�����',price:35000,pngExist:1},
{ id: 1120,name:'lotus t',category:'�����',price:130000,pngExist:1},
{ id: 1121,name:'skittels bite red',category:'�����',price:95000,pngExist:1},
{ id: 1133,name:'������ ��� ����',category:'���� ������',price:270000,pngExist:1},
{ id: 1140,name:'ozmo cornee',category:'�����',price:45000,pngExist:1},
{ id: 1146,name:'������ ��� ����',category:'����',price:230000,pngExist:1},
{ id: 1147,name:'������ ��� ����',category:'����',price:200000,pngExist:1},
{ id: 1148,name:'������ touch',category:'����',price:155000,pngExist:1},
{ id: 1149,name:'������ ���� ����',category:'����',price:135000,pngExist:1},
{ id: 1150,name:'������ ���� ����',category:'����',price:130000,pngExist:1},
{ id: 1151,name:'������� ���� compact',category:'����',price:125000,pngExist:1},
{ id: 1152,name:'������ ����� compact',category:'����',price:125000,pngExist:1},
{ id: 1153,name:'������ ���� ����',category:'����',price:190000,pngExist:1},
{ id: 1154,name:'������ ���� ����',category:'����',price:150000,pngExist:1},
{ id: 1155,name:'������ ���',category:'����',price:100000,pngExist:1},
{ id: 1156,name:'������ ����� ',category:'����',price:110000,pngExist:1},
{ id: 1157,name:'�������� ���� �����',category:'����',price:230000,pngExist:1},
{ id: 1158,name:'�������� ���� �����',category:'����',price:230000,pngExist:1},
{ id: 1159,name:'������� ����',category:'����',price:250000,pngExist:1},
{ id: 1160,name:'������� ���� ������',category:'����',price:130000,pngExist:1},
{ id: 1161,name:'������� ���� ������',category:'����',price:130000,pngExist:1},
{ id: 1162,name:'������ ���� ����',category:'����',price:50000,pngExist:1},
{ id: 1164,name:'����� ��� ����',category:'����',price:70000,pngExist:1},
{ id: 1165,name:'����� ���� ����',category:'����',price:75000,pngExist:1},
{ id: 1166,name:'����� ���� ����',category:'����',price:75000,pngExist:1},
{ id: 1171,name:'���� �������',category:'����',price:180000,pngExist:1},
{ id: 1172,name:'����� ���� �����',category:'����',price:110000,pngExist:1},
{ id: 1173,name:'����� �������',category:'����',price:110000,pngExist:1},
{ id: 1174,name:'���� �����',category:'����',price:110000,pngExist:1},
{ id: 1183,name:'��� ���',category:'���� ������',price:70000,pngExist:1},
{ id: 1187,name:'����� ���� �����',category:'����',price:60000,pngExist:1},
{ id: 1188,name:'����� ���� ten',category:'����',price:110000,pngExist:1},
{ id: 1193,name:'pik one candy peanut',category:'�����',price:40000,pngExist:1},
{ id: 1241,name:'��� ���',category:'����',price:380000,pngExist:1},
{ id: 1255,name:'���� ����� �����',category:'���� ������',price:60000,pngExist:1},
{ id: 1260,name:'davidoff silver',category:'����',price:130000,pngExist:1},
{ id: 1261,name:'nakhla��',category:'����',price:860000,pngExist:1},
{ id: 1262,name:'tofiluk',category:'�����',price:20000,pngExist:1},
{ id: 1267,name:'gandour lucky555',category:'�����',price:10000,pngExist:1},
{ id: 1268,name:'���� ���� � ���� ����',category:'�������',price:15000,pngExist:1},
{ id: 1269,name:'���� ���� ���� ����',category:'�������',price:15000,pngExist:1},
{ id: 1270,name:'���� ���� ����� ����',category:'�������',price:15000,pngExist:1},
{ id: 1271,name:'�����',category:'���� ������',price:75000,pngExist:1},
{ id: 1273,name:'damla sour belt',category:'�����',price:15000,pngExist:1},
{ id: 1290,name:'���� ������� ���� ����',category:'����',price:255000,pngExist:1},
{ id: 1307,name:'cudbury oroe',category:'�����',price:50000,pngExist:1},
{ id: 1351,name:'alpella nuga bar 35g',category:'�����',price:25000,pngExist:1},
{ id: 1365,name:'halley beyaz cikolatali',category:'�����',price:160000,pngExist:1},
{ id: 1371,name:'milka ����',category:'�����',price:110000,pngExist:1},
{ id: 1384,name:'adicto intense',category:'�����',price:50000,pngExist:1},
{ id: 1390,name:'kinder country',category:'�����',price:50000,pngExist:1},
{ id: 1392,name:'mentos orange ice',category:'�����',price:40000,pngExist:1},
{ id: 1395,name:'mentos rule ����� ',category:'�����',price:35000,pngExist:1},
{ id: 1398,name:'wafe up',category:'�����',price:105000,pngExist:1},
{ id: 1399,name:'piko chocolate',category:'�������',price:30000,pngExist:1},
{ id: 1406,name:'rim 1.5l',category:'����',price:30000,pngExist:1},
{ id: 1407,name:'eti gold',category:'�����',price:35000,pngExist:1},
{ id: 1431,name:'pik one ch',category:'�����',price:40000,pngExist:1},
{ id: 1456,name:'����� ����� *4',category:'�����',price:90000,pngExist:1},
{ id: 1466,name:'roshen cocoa',category:'�����',price:55000,pngExist:1},
{ id: 1489,name:'��� ������ ����� ',category:'�����',price:80000,pngExist:1},
{ id: 1500,name:'master sitos ������',category:'�����',price:25000,pngExist:1},
{ id: 1539,name:'��� ���� �����',category:'���� ������',price:110000,pngExist:1},
{ id: 1548,name:'ozmo burger',category:'�����',price:55000,pngExist:1},
{ id: 1552,name:'����� ���� crax',category:'�����',price:35000,pngExist:1},
{ id: 1554,name:'kinder maxi',category:'�����',price:40000,pngExist:1},
{ id: 1558,name:'milka oreostrw',category:'�����',price:110000,pngExist:1},
{ id: 1565,name:'nutella go',category:'�����',price:150000,pngExist:1},
{ id: 1567,name:'kinder delice 2',category:'�����',price:60000,pngExist:1},
{ id: 1601,name:'rich marie',category:'�����',price:15000,pngExist:1},
{ id: 1699,name:'galaxy milk ',category:'�����',price:70000,pngExist:1},
{ id: 1773,name:'unica white',category:'�����',price:30000,pngExist:1},
{ id: 1774,name:'unica creamy vanillia ',category:'�����',price:15000,pngExist:1},
{ id: 1775,name:'peanut signature ',category:'�����',price:30000,pngExist:1},
{ id: 1776,name:'dark signature ',category:'�����',price:30000,pngExist:1},
{ id: 1779,name:'hazelnut signature ',category:'�����',price:30000,pngExist:1},
{ id: 1780,name:'tsipers icy flakes ',category:'�����',price:15000,pngExist:1},
{ id: 1781,name:'tsipers choco crisps',category:'�����',price:15000,pngExist:1},
{ id: 1782,name:'poppins honey flakes',category:'�����',price:15000,pngExist:1},
{ id: 1783,name:'poppins frosted flakes ',category:'�����',price:15000,pngExist:1},
{ id: 1784,name:'choco bits ',category:'�����',price:15000,pngExist:1},
{ id: 1785,name:'big bang white chocolate ',category:'�����',price:15000,pngExist:1},
{ id: 1786,name:'big bang ,ilk chocolate ',category:'�����',price:15000,pngExist:1},
{ id: 1788,name:'big bamg choco flakes ',category:'�����',price:15000,pngExist:1},
{ id: 1790,name:'����� ����',category:'����',price:20000,pngExist:1},
{ id: 1895,name:'�����',category:'�����',price:70000,pngExist:1},
{ id: 1913,name:'go fresh',category:'�����',price:30000,pngExist:1},
{ id: 1950,name:'���� ����',category:'�����',price:35000,pngExist:1},
{ id: 1951,name:'���� ���� ����',category:'�����',price:30000,pngExist:1},
{ id: 1956,name:'����� chupa chups',category:'�����',price:15000,pngExist:1},
{ id: 1957,name:'mentos 3d ����',category:'�����',price:30000,pngExist:1},
{ id: 1984,name:'������ ������',category:'������',price:1000000,pngExist:1},
{ id: 2000,name:'nakla 250 g',category:'����',price:350000,pngExist:1},
{ id: 2012,name:'sitos ��� ��� �����',category:'�����',price:25000,pngExist:1},
{ id: 2049,name:'���� ����',category:'�����',price:400000,pngExist:1},
{ id: 2076,name:'����� ��',category:'����',price:530000,pngExist:1},
{ id: 2093,name:'brilliant slim',category:'����',price:100000,pngExist:1},
{ id: 2104,name:'damla ���',category:'�����',price:15000,pngExist:1},
{ id: 2106,name:'mentos',category:'�����',price:35000,pngExist:1},
{ id: 2126,name:'okay caramel0 ',category:'�����',price:20000,pngExist:1},
{ id: 2140,name:'�� ����� ���� �����',category:'����',price:620000,pngExist:1},
{ id: 2148,name:'������ �� ����',category:'����',price:90000,pngExist:1},
{ id: 2177,name:'pringles 165g original',category:'�����',price:190000,pngExist:1},
{ id: 2179,name:'pringles 165g sour cream and onion',category:'�����',price:190000,pngExist:1},
{ id: 2198,name:'okay strawbery ',category:'�����',price:20000,pngExist:1},
{ id: 2212,name:'choco balls ',category:'�����',price:15000,pngExist:1},
{ id: 2237,name:'gauloise ����',category:'����',price:130000,pngExist:1},
{ id: 2238,name:'��� ���� 1�',category:'����',price:270000,pngExist:1},
{ id: 2239,name:'���� ����',category:'�����',price:30000,pngExist:1},
{ id: 2241,name:'mastro peanut  ',category:'�����',price:20000,pngExist:1},
{ id: 2243,name:'����� ���',category:'���� �����',price:100000,pngExist:1},
{ id: 2262,name:'������ ���� ���� �',category:'���� ������',price:40000,pngExist:1},
{ id: 2293,name:'cote d dor05',category:'�����',price:100000,pngExist:1},
{ id: 2296,name:'������� ���',category:'�����',price:20000,pngExist:1},
{ id: 2297,name:'������� ����',category:'�����',price:20000,pngExist:1},
{ id: 2304,name:'nouba',category:'�����',price:25000,pngExist:1},
{ id: 2314,name:'ETi wanted',category:'�����',price:30000,pngExist:1},
{ id: 2315,name:'ETi adicto gourmet',category:'�����',price:45000,pngExist:1},
{ id: 2319,name:'TWIRL ',category:'�����',price:110000,pngExist:1},
{ id: 2325,name:'ozmo mello',category:'�����',price:30000,pngExist:1},
{ id: 2327,name:'���� 4 �����',category:'�����',price:25000,pngExist:1},
{ id: 2335,name:'������ ������',category:'����',price:40000,pngExist:1},
{ id: 2368,name:'dolsi ����� ����',category:'�����',price:60000,pngExist:1},
{ id: 2369,name:'dolsi ���� ����',category:'�����',price:60000,pngExist:1},
{ id: 2370,name:'dolsi ����� ����',category:'�����',price:60000,pngExist:1},
{ id: 2372,name:'dolsi ���� ����',category:'�����',price:60000,pngExist:1},
{ id: 2421,name:'biscolata due max hazelnut',category:'�����',price:55000,pngExist:1},
{ id: 2426,name:'pop cake',category:'�����',price:35000,pngExist:1},
{ id: 2439,name:'biscolata moodd',category:'�����',price:70000,pngExist:1},
{ id: 2460,name:'dabke lukum',category:'�����',price:15000,pngExist:1},
{ id: 2467,name:'������ intense',category:'�����',price:55000,pngExist:1},
{ id: 2479,name:'dolsi �� ����',category:'�����',price:60000,pngExist:1},
{ id: 2480,name:'dolsi ���� ����',category:'�����',price:60000,pngExist:1},
{ id: 2481,name:'winston silver ����',category:'����',price:260000,pngExist:1},
{ id: 2486,name:'BEBETO watermelon',category:'�����',price:75000,pngExist:1},
{ id: 2487,name:'BEBETO pink&white',category:'�����',price:75000,pngExist:1},
{ id: 2489,name:'BEBETO roller',category:'�����',price:75000,pngExist:1},
{ id: 2495,name:'BEBETO sour worms',category:'�����',price:75000,pngExist:1},
{ id: 2496,name:'BEBETO ocean park',category:'�����',price:75000,pngExist:1},
{ id: 2498,name:'BEBETO berries',category:'�����',price:75000,pngExist:1},
{ id: 2510,name:'joocyz mango',category:'�������',price:20000,pngExist:1},
{ id: 2512,name:'joocyz apple',category:'�������',price:20000,pngExist:1},
{ id: 2515,name:'cookies gandour ',category:'�����',price:40000,pngExist:1},
{ id: 2516,name:'lucky 555 choco',category:'�����',price:20000,pngExist:1},
{ id: 2521,name:'��� fine sea',category:'���� ������',price:20000,pngExist:1},
{ id: 2537,name:'master coctail',category:'�����',price:50000,pngExist:1},
{ id: 2539,name:'dolsi pista',category:'����',price:20000,pngExist:1},
{ id: 2540,name:'dolsi novita',category:'����',price:20000,pngExist:1},
{ id: 2541,name:'dolsi chocoloco',category:'����',price:50000,pngExist:1},
{ id: 2542,name:'dolsi maxibon',category:'����',price:70000,pngExist:1},
{ id: 2544,name:'dolsi choco locco',category:'����',price:70000,pngExist:1},
{ id: 2546,name:'dolsi kashta',category:'����',price:80000,pngExist:1},
{ id: 2548,name:'dolsi cappriccio',category:'����',price:70000,pngExist:1},
{ id: 2551,name:'dolsi cupra',category:'����',price:70000,pngExist:1},
{ id: 2558,name:'pringles cheese',category:'�����',price:190000,pngExist:1},
{ id: 2572,name:'wafe up hazelnut',category:'�����',price:45000,pngExist:1},
{ id: 2574,name:'eti gong herbs',category:'�����',price:40000,pngExist:1},
{ id: 2575,name:'eti gong cheese',category:'�����',price:40000,pngExist:1},
{ id: 2576,name:'eti gong honey',category:'�����',price:40000,pngExist:1},
{ id: 2621,name:'gardena hazelnut',category:'�����',price:65000,pngExist:1},
{ id: 2623,name:'gardena sandwish dark choco',category:'�����',price:50000,pngExist:1},
{ id: 2624,name:'gardena sandwish milk vanilla',category:'�����',price:50000,pngExist:1},
{ id: 2633,name:'extra peppermint',category:'�����',price:45000,pngExist:1},
{ id: 2636,name:'extra white',category:'�����',price:45000,pngExist:1},
{ id: 2639,name:'���� ����� �����',category:'�����',price:10000,pngExist:1},
{ id: 2640,name:'���� ����� �����',category:'�����',price:10000,pngExist:1},
{ id: 2642,name:'pik one',category:'�����',price:15000,pngExist:1},
{ id: 2643,name:'dounat yamama',category:'�����',price:30000,pngExist:1},
{ id: 2647,name:'������� ����',category:'����',price:250000,pngExist:1},
{ id: 2649,name:'������ ����',category:'���� ������',price:25000,pngExist:1},
{ id: 2660,name:'joocyz������',category:'�������',price:20000,pngExist:1},
{ id: 2705,name:'biscolata stars ',category:'�����',price:45000,pngExist:1},
{ id: 2715,name:'FLAKE',category:'�����',price:35000,pngExist:1},
{ id: 2717,name:'lovita milk',category:'�����',price:115000,pngExist:1},
{ id: 2721,name:'haribo happy-cola',category:'�����',price:10000,pngExist:1},
{ id: 2723,name:'jordina swiss roll',category:'�����',price:90000,pngExist:1},
{ id: 2741,name:'mentos sour fruite',category:'�����',price:35000,pngExist:1},
{ id: 2742,name:'wanted pops ',category:'�����',price:30000,pngExist:1},
{ id: 2763,name:'���� ���� ',category:'���� ������',price:75000,pngExist:1},
{ id: 2766,name:'safari',category:'�����',price:15000,pngExist:1},
{ id: 2779,name:'halley mini ',category:'�����',price:120000,pngExist:1},
{ id: 2787,name:'���� ����',category:'�����',price:15000,pngExist:1},
{ id: 2791,name:'roshen hazl',category:'�����',price:55000,pngExist:1},
{ id: 2792,name:'unica 33%',category:'�����',price:15000,pngExist:1},
{ id: 2820,name:'digestive dark chocolate gandour ',category:'�����',price:155000,pngExist:1},
{ id: 2822,name:'poppins honey flakes 350g ',category:'�����',price:360000,pngExist:1},
{ id: 2824,name:'choco  bits ',category:'�����',price:360000,pngExist:1},
{ id: 2825,name:'choco bumps 350g +20%',category:'�����',price:255000,pngExist:1},
{ id: 2826,name:'marlboro crafted compact blue',category:'����',price:100000,pngExist:1},
{ id: 2890,name:'mentos water melon mini',category:'�����',price:105000,pngExist:1},
{ id: 2891,name:'mentos strawbery mini ',category:'�����',price:105000,pngExist:1},
{ id: 2892,name:'mentos  bubble mini ',category:'�����',price:105000,pngExist:1},
{ id: 2893,name:'mentos fresh mint mini ',category:'�����',price:105000,pngExist:1},
{ id: 2909,name:'milka oreo w',category:'�����',price:110000,pngExist:1},
{ id: 2921,name:'snacks',category:'�����',price:65000,pngExist:1},
{ id: 2966,name:'nescafe 2 in 1',category:'�����',price:20000,pngExist:1},
{ id: 2974,name:'yamama love choco',category:'�����',price:35000,pngExist:1},
{ id: 2977,name:'yamama roll',category:'�����',price:30000,pngExist:1},
{ id: 2993,name:'skittles yellow',category:'�����',price:60000,pngExist:1},
{ id: 2996,name:'gofret orange 142g',category:'�����',price:90000,pngExist:1},
{ id: 3011,name:'loacker sandwish hazelnut 25g',category:'�����',price:50000,pngExist:1},
{ id: 3014,name:'���',category:'������',price:360000,pngExist:1},
{ id: 3020,name:'dark 330 ',category:'�������',price:45000,pngExist:1},
{ id: 3033,name:'������ ��� al basha',category:'����',price:50000,pngExist:1},
{ id: 3045,name:'maggi  ���� *8',category:'���� ������',price:35000,pngExist:1},
{ id: 3080,name:'halley roll  ����',category:'�����',price:180000,pngExist:1},
{ id: 3087,name:'loacker sandiwsh choco',category:'�����',price:50000,pngExist:1},
{ id: 3099,name:'biscolate milk cream m',category:'�����',price:25000,pngExist:1},
{ id: 3113,name:'poppins choco pops ',category:'�����',price:15000,pngExist:1},
{ id: 3144,name:'mentos fresh ',category:'�����',price:35000,pngExist:1},
{ id: 3165,name:'pringles paprika ����',category:'�����',price:190000,pngExist:1},
{ id: 3167,name:'nutella bag ',category:'�����',price:410000,pngExist:1},
{ id: 3169,name:'biscoff roll',category:'�����',price:180000,pngExist:1},
{ id: 3170,name:'happy jo',category:'�����',price:40000,pngExist:1},
{ id: 3171,name:'mallow pop marshmello',category:'�����',price:70000,pngExist:1},
{ id: 3172,name:'toren coconut',category:'�����',price:35000,pngExist:1},
{ id: 3173,name:'toren lemon',category:'�����',price:35000,pngExist:1},
{ id: 3174,name:'toren orange',category:'�����',price:35000,pngExist:1},
{ id: 3175,name:'jordina dream choco',category:'�����',price:20000,pngExist:1},
{ id: 3187,name:'no :1 bllack',category:'�����',price:25000,pngExist:1},
{ id: 3197,name:'lovita cocoa',category:'�����',price:115000,pngExist:1},
{ id: 3266,name:'croisant al asr cheese ',category:'�����',price:40000,pngExist:1},
{ id: 3328,name:'oreo original *4',category:'�����',price:35000,pngExist:1},
{ id: 3358,name:'���� ����� ',category:'�����',price:10000,pngExist:1},
{ id: 3378,name:'��� white bell',category:'���� ������',price:115000,pngExist:1},
{ id: 3422,name:'cedars silver line',category:'����',price:70000,pngExist:1},
{ id: 3438,name:'crunch milk',category:'�����',price:60000,pngExist:1},
{ id: 3467,name:'poppins cookies',category:'�����',price:15000,pngExist:1},
{ id: 3481,name:'��� ��� ���',category:'���� ������',price:150000,pngExist:1},
{ id: 3483,name:'masterb ������ ��� ',category:'�����',price:90000,pngExist:1},
{ id: 3484,name:'master ������ �������',category:'�����',price:90000,pngExist:1},
{ id: 3489,name:'��� cocoa granule',category:'���� ������',price:15000,pngExist:1},
{ id: 3510,name:'milkaa ����',category:'�����',price:110000,pngExist:1},
{ id: 3554,name:'snickers new',category:'�����',price:60000,pngExist:1},
{ id: 3561,name:'rim 0.5l',category:'����',price:20000,pngExist:1},
{ id: 3564,name:'����� rim 1.5 l',category:'����',price:165000,pngExist:1},
{ id: 3581,name:'hazelnut wooly booly',category:'�����',price:15000,pngExist:1},
{ id: 3582,name:'dark wooly booly',category:'�����',price:15000,pngExist:1},
{ id: 3583,name:'choco wooly booly',category:'�����',price:15000,pngExist:1},
{ id: 3650,name:'ness 1',category:'�����',price:25000,pngExist:1},
{ id: 3656,name:'ness 1 ���� ���� ',category:'�����',price:25000,pngExist:1},
{ id: 3671,name:'elegace silver',category:'����',price:50000,pngExist:1},
{ id: 3681,name:'digestive deemah',category:'�����',price:45000,pngExist:1},
{ id: 3685,name:'master �� ����',category:'�����',price:90000,pngExist:1},
{ id: 3687,name:'jellygum grape',category:'�����',price:15000,pngExist:1},
{ id: 3701,name:'���� ���� 500�',category:'�����',price:60000,pngExist:1},
{ id: 3723,name:'������ ����',category:'�����',price:35000,pngExist:1},
{ id: 3743,name:'��� ���� ���� ������ 1',category:'���� ������',price:65000,pngExist:1},
{ id: 3744,name:'��� ���� ������12',category:'���� ������',price:55000,pngExist:1},
{ id: 3768,name:'ozmo poxi ',category:'�����',price:30000,pngExist:1},
{ id: 3786,name:'milka red',category:'�����',price:120000,pngExist:1},
{ id: 3797,name:'buldak pink',category:'�����',price:160000,pngExist:1},
{ id: 3798,name:'���� 2 ���',category:'�����',price:35000,pngExist:1},
{ id: 3808,name:'����� �����',category:'�����',price:55000,pngExist:1},
{ id: 3811,name:'���� ���� ',category:'�����',price:25000,pngExist:1},
{ id: 3831,name:'�������� 0.6 �',category:'����',price:20000,pngExist:1},
{ id: 3833,name:'�������� 1.5 �',category:'����',price:30000,pngExist:1},
{ id: 3847,name:'master sitos kbir',category:'�����',price:90000,pngExist:1},
{ id: 3926,name:'kinder happy',category:'�����',price:70000,pngExist:1},
{ id: 3927,name:'day break',category:'�����',price:30000,pngExist:1},
{ id: 3929,name:'biskrem ����',category:'�����',price:50000,pngExist:1},
{ id: 3932,name:'milka ������',category:'�����',price:110000,pngExist:1},
{ id: 3951,name:'master �� ����� ���� ',category:'���� ������',price:90000,pngExist:1},
{ id: 4061,name:'leo go 1',category:'�����',price:90000,pngExist:1},
{ id: 4064,name:'m and m ������',category:'�����',price:90000,pngExist:1},
{ id: 4066,name:'milka ����...',category:'�����',price:110000,pngExist:1},
{ id: 4068,name:'milka luflee ',category:'�����',price:110000,pngExist:1},
{ id: 4069,name:'milka riso',category:'�����',price:110000,pngExist:1},
{ id: 4088,name:'popel coakie ',category:'�����',price:20000,pngExist:1},
{ id: 4089,name:'��� 1k',category:'����',price:30000,pngExist:1},
{ id: 4116,name:'poppins choco pops 438g',category:'�����',price:255000,pngExist:1},
{ id: 4128,name:'������ ���� ����',category:'����',price:100000,pngExist:1},
{ id: 4134,name:'baunty dobel',category:'�����',price:50000,pngExist:1},
{ id: 4137,name:'okay oreoo',category:'�����',price:20000,pngExist:1},
{ id: 4148,name:'crumbz ����',category:'�����',price:40000,pngExist:1},
{ id: 4149,name:'crumbz ���',category:'�����',price:40000,pngExist:1},
{ id: 4150,name:'crumbz ���',category:'�����',price:40000,pngExist:1},
{ id: 4151,name:'crumbz ��������',category:'�����',price:40000,pngExist:1},
{ id: 4213,name:'galaxy flutes 1',category:'�����',price:25000,pngExist:1},
{ id: 4244,name:'���� 0.5 ��� ������',category:'�����',price:200000,pngExist:1},
{ id: 4250,name:'������ hazir noodle',category:'���� ������',price:25000,pngExist:1},
{ id: 4257,name:'���� ������ ������',category:'����',price:40000,pngExist:1},
{ id: 4279,name:'master 1dollar ������',category:'�����',price:90000,pngExist:1},
{ id: 4284,name:'����� ���� ���������',category:'�����',price:10000,pngExist:1},
{ id: 4301,name:'snips 100000 curls chees',category:'�����',price:100000,pngExist:1},
{ id: 4310,name:'����� ���� ������ ����',category:'�����',price:75000,pngExist:1},
{ id: 4438,name:'������� ����',category:'�����',price:55000,pngExist:1},
{ id: 4453,name:'kinder happy hippo',category:'�����',price:30000,pngExist:1},
{ id: 4470,name:'������ orange 6����',category:'�������',price:70000,pngExist:1},
{ id: 4476,name:'������',category:'������',price:500000,pngExist:1},
{ id: 4492,name:'������ habbal',category:'�����',price:60000,pngExist:1},
{ id: 4530,name:'master salt ����',category:'�����',price:90000,pngExist:1},
{ id: 4544,name:'������ ��� ���',category:'���� �����',price:250000,pngExist:1},
{ id: 4574,name:'�������� ',category:'������',price:500000,pngExist:1}
];