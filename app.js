// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

// criando dois botões para chamada das intents

var b1 = Ti.UI.createButton({
    width:'auto',
    height: 100,
    title:'Enviar SMS',
    top:0
});

var b2 = Ti.UI.createButton({
    width:'auto',
    height: 100,
    title:'Enviar SMS diretamente',
    top:300
});


b1.addEventListener('click',function(e){
    // criando o objeto intent com seus atributos básicos
    var intent = Ti.Android.createIntent({ 
        action: Ti.Android.ACTION_VIEW,
        type: 'vnd.android-dir/mms-sms' 
    });

    intent.putExtra('sms_body', 'texto da mensagem');
    intent.putExtra('address', '1111111');
    // inicializando a atividade
    Ti.Android.currentActivity.startActivity(intent);
});

b2.addEventListener('click',function(e){
    var intent = Ti.Android.createIntent({
        action: Ti.Android.ACTION_SENDTO, // repare que aqui a action é do tipo SENDTO (apenas envio)
        data: 'smsto:11111111'
    });

    intent.putExtra('sms_body', 'texto da mensagem');
    Ti.Android.currentActivity.startActivity(intent);
    
});



win1.add(b1);
win1.add(b2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
  


// open tab group
tabGroup.open();
