// Find 関数
// 文字列 S1 と文字列 S2 を入力として受け取り、S1 の中に S2 が含まれていた場合は最初の見つかった位置を返します。含まれていない場合は、-1 を返します。
let sentence = "I will go hiking near a ranch in Oregon.";
let sentence2 = "The ranch";
let bun = "100人近くの人がいたが、ほとんど会ったことのある人たちだった";

// Find関数
console.log(sentence.indexOf("Oregon")); //33
console.log(bun.indexOf("近く")); //4
console.log(sentence.indexOf(sentence2.substring(3, sentence2.length))); //23

// 例題1
// recursion@info.comの@のインデックスの位置を調べましょう。
let email = "recursion@info.com";

// console.logで出力してください。
console.log(email.indexOf("@"));

// 例題2
// 例題1で求めたインデックスを@の位置として変数atLocationに入れましょう。
let atLocation = email.indexOf("@");

// 変数atLocationを使って、recursion@info.comの@より後ろを切り取りましょう。
// console.logで出力してください。
let domain = email.substring(atLocation + 1, email.length);
console.log(domain);
console.log(email.substring(atLocation + 1, email.length));

// Replace 関数
// 文字列 S、文字列 S1、文字列 S2 を入力として入力として受け取り、S1 が S の部分列の場合、S の中にある S1 と S2 を置換して S を返します。
let lastName = "Albert";
let sentence = "I will go hiking near a ranch in Oregon.";
let sentence2 = "The ranch";
let bun = "100人近くの人がいたが、ほとんど会ったことのある人たちだった";

// Replace関数
// sentenceのOregonとCaliforniaを入れ替えます。
console.log(sentence.replace("Oregon", "California"));

console.log(bun.replace("近く", "ぐらい"));
console.log(sentence2.replace('The', lastName + "'s"));

// 1つ目だけを入れ替えます。
console.log("Aaaaahhh the ocean".replace("a", "b"));

// /string/gで全ての文字列を入れ替えます。
console.log("Aaaaahhh the ocean".replace(/a/g, "b"));

// 例題1
// 文字列Helloの全てのlをpに置換してください。
// console.logで出力してください。
console.log("Hello".replace(/l/g, "p"));

// 例題2
// 変数sentenceの中にある文字列のIを、変数lastNameを使って置換してください。(I --> Albert)
// console.logで出力してください。(Albert will go hiking near a ranch in Oregon.)
console.log(sentence.replace("I", lastName));

