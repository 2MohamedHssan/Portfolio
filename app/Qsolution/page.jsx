import Link from "next/link";
import Footer from "../components/Footer";

export default function page() {
  const questions = [
    {
      q: "console.log([] == []);",
      answer: "false",
      explain:
        "كل مصفوفة [] ليها مكان مختلف في الذاكرة (reference)، عشان كده المقارنة بترجع false.",
    },
    {
      q: "console.log([] == ![]);",
      answer: "true",
      explain:
        "![] بيرجع false → المقارنة [] == false → [] يتحول '' → '' == false → 0 == 0 → true.",
    },
    {
      q: "console.log([1,2] == '1,2');",
      answer: "true",
      explain: "[1,2] بيتحول '1,2' → '1,2' == '1,2' → true.",
    },
    {
      q: "console.log(null == undefined);",
      answer: "true",
      explain: "null و undefined متساويين في المقارنة بـ ==",
    },
    {
      q: "console.log(null === undefined);",
      answer: "false",
      explain: "=== بيقارن النوع والقيمة، والنوع هنا مختلف.",
    },
    {
      q: "console.log([] == 0);",
      answer: "true",
      explain: "[] يتحول '' → '' == 0 → 0 == 0 → true.",
    },
    {
      q: "console.log([0] == 0);",
      answer: "true",
      explain: "[0] يتحول '0' → '0' == 0 → 0 == 0 → true.",
    },
    {
      q: "console.log([1] == true);",
      answer: "true",
      explain: "[1] يتحول '1' → '1' == true → 1 == 1 → true.",
    },
    {
      q: "console.log('' == 0);",
      answer: "true",
      explain: "'' بيتحول 0 → 0 == 0 → true.",
    },
    {
      q: "console.log(false == '0');",
      answer: "true",
      explain: "false بيتحول 0 و'0' بيتحول 0 → 0 == 0 → true.",
    },
    {
      q: "console.log(false == []);",
      answer: "true",
      explain: "[] يتحول '' → false == '' → false == 0 → 0 == 0 → true.",
    },
    {
      q: "console.log(false == '');",
      answer: "true",
      explain: "false بيتحول 0 و'' بيتحول 0 → 0 == 0 → true.",
    },
    {
      q: "console.log(typeof null);",
      answer: "'object'",
      explain: "bug قديم في JavaScript، typeof null بيرجع 'object'.",
    },
    {
      q: "console.log(typeof []);",
      answer: "'object'",
      explain: "array نوع خاص من object في JavaScript.",
    },
    {
      q: "console.log(typeof NaN);",
      answer: "'number'",
      explain: "NaN يعتبر نوعه number رغم إنه Not a Number.",
    },
    {
      q: "console.log(typeof function(){});",
      answer: "'function'",
      explain: "typeof بيرجع 'function' للكائنات اللي هي functions.",
    },
    {
      q: "console.log(typeof undefined);",
      answer: "'undefined'",
      explain: "undefined نوعه undefined.",
    },
    {
      q: "for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100); }",
      answer: "يطبع 3 3 3",
      explain: "var ملوش block scope، i بيوصل 3 قبل ما التايمر يشتغل.",
    },
    {
      q: "for (let i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100); }",
      answer: "يطبع 0 1 2",
      explain: "let ليه block scope، كل دورة ليها نسخة خاصة من i.",
    },
    {
      q: "console.log(NaN === NaN);",
      answer: "false",
      explain: "NaN مش بيساوي نفسه، استخدم Number.isNaN للتأكد.",
    },
  ];

  return (
    <>
      <div
        lang="ar"
        dir="rtl"
        className="min-h-screen bg-gray-900 text-white p-6"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-center mb-6">
            📘 حلول أسئلة JavaScript
          </h1>
          {questions.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-4 shadow">
              <pre
                dir="ltr"
                className="bg-gray-700 p-3 rounded text-green-400 overflow-x-auto qs"
              >
                {item.q}
              </pre>
              <p className="mt-2">
                <span className="text-blue-400 font-bold">الإجابة:</span>{" "}
                {item.answer}
              </p>
              <p className="mt-1">
                <span className="text-yellow-400 font-bold">الشرح:</span>{" "}
                {item.explain}
              </p>
            </div>
          ))}
          <Link
            prefetch
            href="/"
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            prefetch={true}
          >
            View My Website
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
