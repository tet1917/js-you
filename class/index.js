//クラス（テンプレート）
//インスタンス（クラスを使ってテンプレに当てはめたものを量産されたもの）
//クラスとインスタンスを使わないと、一部書き換えようとすると動かなくなってしまうので使い回すためにクラスとインスタンスを使う。




(() => {
//クラスの最初は大文字
  class Accordion {
    //初期化
    constructor(obj){

      console.log('obj',obj);
      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      const triggerLen = $trigger.length;
      let index = 0;
      while (index < triggerLen) {
        // $trigger[index].addEventListener('click',(e) => clickHandler(e))

        //cliclhandlerの前に、thisが必要。
        //thisはクラスそのものをさんしょうする。
        $trigger[index].addEventListener('click',(e) =>this.clickHandler(e));
        index++;
      }
      this.actionUnko();
    }

    actionUnko(){
      console.log('hello');
    }

    //クリックしたら事項される処理
    //クラスの中で関数を書くときはconstなどを外す。
    clickHandler(e){
      e.preventDefault();

      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;
      if($content.style.display === 'block'){
        $content.style.display = 'none';
      }else {
        $content.style.display = 'block';
      }
    };
  }

  const fuckingAccordion = new Accordion({
    hookName:'#js-faq',
    tagName:'p'
  });

  const dumAccordion = new Accordion({
    hookName:'#js-accordion',
    tagName:'a'
  });

  const aaaAccordion = new Accordion({
    hookName:'#js-accordion-mini',
    tagName:'h4'
  });
})();


