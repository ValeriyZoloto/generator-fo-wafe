const affirmations = [
	"Санюша! Ты прекрасный, милый друг.",
	"Санюша! Ты супер талантлива! Лучше тебя нет никого!",
	"Санюша! Все в твоей жизни смотрят на тебя, ты потрясающая!",
	"Санюша! Ты заслуживаешь только самого лучшего!",
	"Санюша! Ты отлично выполняешь свою работу!",
	"Санюша! Дорогая моя половинка, моя любимая жена, я давно очарован твоей красотой, сражен умом, окружен заботой, я живу в плену твоей нежности, и я счастлив",
	"Санюша! Ты красива внутри и снаружи.",
	"Санюша! Напоминание: полюби в первую очередь себя.",
	"Санюша! Ты прекрасная жена все вокруг любят тебя!",
	"Санюша! Твой ум не имеет границ!",
	"Санюша! Может кто-то есть лучше, скорее всего есть хуже,но таких как ты,точно НЕТ!!!",
	"Санюша! У тебя прекрасная самоирония и эмпатия, а еще я есть источник настоящего веселья",
	"Санюша! Ты такая Лапочка! Ты такая Цаца! На тебя, Красавицу – не налюбоваться! Ты такая Умница! Ты такая Краля! Вы такой красавицы – с роду не видали!",
	"Санюша! ты самая лучшая на свете!!!",
	"Санюша! Моя любимая супруга, Мой сладкий сон, моя мечта. Моя надёжная подруга, Ты привлекательна всегда. Ты солнца свет, ты дождь хрустальный, Прекрасный Ангел неземной.Ты безупречна, идеальна, И я навеки только твой.",
	"Санюша! Эта планета тебя не заслуживает. Ты слишком прекрасна и бесподобна для неё.",
	"Санюша! Ты самая добрая, нежная, милая, Больше жизни я тебя люблю, Ты самая ласковая и самая красивая, Тебя я обожаю и боготворю. Люблю тебя я больше всех на свете, Люблю тебя и берегу, Тебя прекрасней нет на всей планете, Люблю тебя, одну люблю.",
	"Санюша! Ты красива! Ты изящна! Ты мила! Ты так потрясна! Ты красивее мечты! Ты прекрасней красоты! Ты творение богов! Ты смешение райских снов! Ты сплетение чудес! Ты волшебный свет небес! Ты просто прелесть и звезда и это всем известно! На свете нет милей тебя! Ты самая чудесная!",
	"Санюша! Ты у меня одна такая, милая, родная, Моя самая любимая и нежная на свете, Люблю тебя всем сердцем, моя ты дорогая, Для меня ты настоящий сердца огонь и ветер! Не задумаюсь с тобою, все невзгоды разделю, Если бы ты знала только, как же я тебя люблю! За голос твой прекрасный все на свете я отдам, Тебя я обожаю, моя прекрасная мадам!",
	"Санюша! Любимая жена, ты так красива Сегодня, в прочем, так же как всегда! Так светел блеск в глазах твоих счастливых! Пусть будет он таким спустя года! Ты, как всегда, стройна и элегантна! Опять не налюбуюсь я тобой! И я всю жизнь обязан быть галантным С такою замечательной женой!",
	"Санюша! Женственность и сила, все в тебе одной, Ты моя любовь, лучик солнца золотой! Красотка моя милая, благодарен я судьбе, За то, что привела она меня к тебе. Человечек мой любимый, тобою просто восхищен, Одним взглядом твоим нежным навсегда я покорен. Лучше девушки чем ты, на свете просто нет, Прожить хочу с тобою на этом свете я сто лет!",
	"Санюша! Любимая моя, всё для тебя, Ранние рассветы и тёмные ночи, Поэтом стану только для тебя, Люблю тебя, родная, очень – очень. Для тебя вся радость, свет, любовь, Для тебя вся нежность с пылающей страстью, Для тебя весь мир я подарить готов, Милая – ты моё счастье.",
	"Санюша! Ты, как море, разная И непостижимая. Как лента атласная: Скользкая, красивая, Все равно прекрасная И всегда любимая!",
	"Санюша! Твои глаза – два океана, Как звёзды в ярком, лунном свете. Всегда нежна, всегда желанна, Как солнце утром на рассвете. Твой образ женственный, прекрасный, Ты как мечта неуязвима. Твой голос ласковый и страстный, Как шум дождя неповторимый.",
	"Санюша! Без тебя, как солнце без тепла, Без тебя, как океан безводный, Тебя я больше жизни люблю, боготворю, Ради тебя готов на что угодно. Ты самая красивая, ты самая любимая, С тобою мне так повезло, Ты добрая, лаковая, неповторимая, С тобою мне просто и легко.",
	"Санюша! На свете нет прекрасней глаз, Чем у тебя родная, Я в них тону, как в первый раз, Их блеск лишь замечая. Очарованье в них любви, Что свет волшебный источает, И так божественны они, Как будто тайны мира знают.",
	"Санюша! С тобою, кажется весь мир чудесным, Признаться всем я рад, любя, Что мне подарок королевский, Судьба подарила, милая, тебя. Тебя люблю, боготворю, родная, Ты свет в окошке, мой идеал, Я исполню все твои желанья, Чтоб каждый миг счастливым стал.",
	"Санюша! Я не устану повторять, родная, Как ты божественна, как хороша. Как красотой своею восхищаешь, Как ты заботлива, мила. Я счастлив быть, любимая, с тобою. Мне жизни нет на свете без тебя. Моя любовь, мой свет с заботой и покоем. Моя чудесная, прекрасная жена.",
    "Моей любимой жене Сашеньке! Ты самая лучшая на свете!",
];

const affirmBtn = document.querySelector(".form-inputs input");
const text = document.querySelector(".text p");

function shuffle(max) {
	let index = Math.floor(Math.random() * Math.floor(max));
	text.innerHTML = affirmations[index];
}

affirmBtn.addEventListener("click", function () {
	shuffle(affirmations.length);
});
