//TODO: Please write code in this file.

    function printInventory(inputs) {
       var  allItems = loadAllItems();//创建一个新对象实例，采取默认值
        var fixtures = [];
        for (var i = 0; i < inputs.length; i++) {

            for (var j=0;j < allItems.length;j++)
            if (inputs[i] == allItems[j].barcode)
            {fixtures.push(allItems[j]);}
        }


        var head_form = {};
        for (var i = 0; i < fixtures.length; i++) {
            var barcode = fixtures[i].barcode;
            if (barcode in head_form)
                head_form[barcode]++;
            else
                head_form[barcode] = 1;
        }
        var count_form = [];
        for (var i = 0; i < fixtures.length; i++) {
            var barcode = fixtures[i].barcode;
            if (head_form[barcode] > 0) {
                fixtures[i].count = head_form[barcode];
                head_form[barcode] = 0;
                count_form.push(fixtures[i]);

            }


        }
        console.log(Form(count_form));
    }
    function Form(count_form){
        var form =
            '名称：{{ name }}，数量：{{count}}{{ unit }}，单价：{{prices}}(元)，小计：{{sum}}(元)\n';
        var forms = '';
        for (var i = 0; i < count_form.length; i++) {
            count_form[i].prices = function () {
                return count_form[i].price.toFixed(2);
            };
            count_form[i].sum = function () {
                return (count_form[i].price * count_form[i].count).toFixed(2);
            };
            forms = forms + Mustache.render(form, count_form[i]);
        }

        count_form.total =
            function() {
                var sum = 0;
                for (var i = 0; i < count_form.length; i++)
                    sum += count_form[i].price * count_form[i].count;
                return sum.toFixed(2);
            };
        for (var j=0;j<forms.length;j++)
        {

        }
        var output = Mustache.render(
            '***<没钱赚商店>购物清单***\n' +
            forms +
            '----------------------\n' +
            '总计：{{total}}(元)\n' +
            '**********************', count_form);
        alert(output);//弹窗效果
        console.log(output);//控制台显示

}