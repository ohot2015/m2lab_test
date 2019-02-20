let data = {
    buy:{
      wmr: 0.96,
      wmz: 55.7,
    },
    sell:{
      wmr:1,
      wmz:58.9,
    }
  };

const app = new Vue ({
    el: '#app',
    data: {
        message: '',
        cps:[
          { text: 'WMR', buy_value: data.buy.wmr, sell_value: data.sell.wmr},
          { text: 'WMZ', buy_value: data.buy.wmz, sell_value: data.sell.wmz }
        ],
        buy:{
            wmr: data.buy.wmr,
            wmz: data.buy.wmz
        },
        sell:{
            wmr: data.sell.wmr,
            wmz: data.sell.wmz
        } 
    },
    methods: {
        change_buy: function(){
            let cnt = 0;
            if($('#input-buy').val()!='' && $('#input-buy').val()!=0 && $('#select-buy').val()) cnt = $('#select-buy').val() * $('#input-buy').val();
            $('#input-buy-cnt').text(cnt);
        },
        change_sell: function(){
            let cnt = 0;
            if($('#input-sell').val()!='' && $('#input-sell').val()!=0 && $('#select-sell').val()) cnt = $('#input-sell').val() / $('#select-sell').val();
            $('#input-sell-cnt').text(cnt);
        },
        isNumberKey: function(evt){
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)){
                event.preventDefault();
                return false;
            }
        }
    }
})