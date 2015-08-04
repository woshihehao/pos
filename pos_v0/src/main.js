//TODO: Please write code in this file.


function printInventory(inputs) {
    var form =
        '名称：{{ name }}，数量：{{count}}{{ unit }}，单价：{{prices}}(元)，小计：{{sum}}(元)\n';
    var forms = '';
    var sum = 0;
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].prices = function () {
            return inputs[i].price.toFixed(2);
        };
        inputs[i].sum = function () {
            return (inputs[i].price * inputs[i].count).toFixed(2);
        };
        forms = forms + Mustache.render(form, inputs[i]);
    }//输入所有商品的信息，且将浮点数小数点后位数限制在2位
    inputs.total =
        function() {
            var sum = 0;
            for (var i = 0; i < inputs.length; i++)
                sum += inputs[i].price * inputs[i].count;
            return sum.toFixed(2);
        };
    var output = Mustache.render(
        '***<没钱赚商店>购物清单***\n' +
        forms +
        '----------------------\n' +
        '总计：{{total}}(元)\n' +
        '**********************', inputs);
    alert(output);//弹窗效果
    console.log(output);//控制台显示
}