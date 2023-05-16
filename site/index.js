//グローバル変数を汚染するので即時関数で囲った中でコードを書いていく。
(()=>{

    //変数名に＄をつけると、変数はDOM要素であることを明示的に表す
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    //querySelectorAll => DOM要素の中から条件に当てはまるDOMを取得する。
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');

    //初期化
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();

    //クリックしたら起こるイベント
    const handleClick = (e) => {
        //e.preventDefaultは、リンク要素を無効化させることができる
        e.preventDefault();
        console.log('e!',e);

        //クリックされたnavとそのdateを取得
        //targetっていうのはどの要素がクリックされたかっていうDOM要素を取得してくるよというもの
        const $this = e.target;
        //dataset.(属性名)トイレるとデータ属性の値が取得できる。
        const targetVal = $this.dataset.nav;

        console.log('$this',$this);

        //対象のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content= "' + targetVal + '"]')[0].style.display = 'block';
    };


    //全nav要素に対して関数を適応、発火
    let index = 0;
    while(index < $nav.length){
        $nav[index].addEventListener('click',(e) => handleClick(e));
        index++;
    };
    //$nav [0].addEventListener('click',(e) =>handleClick(e));
})();