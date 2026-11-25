/*
  Плейлист.

  Как добавить трек:
  1. Положи файл в эту папку (musics/).
  2. Впиши имя файла строкой в массив ниже:

       "moj-trek.mp3"

  Название, артист и обложка подтянутся из тегов файла. Если хочешь задать
  вручную — вместо строки укажи объект (любое поле можно пропустить):

       { file: "moj-trek.mp3", title: "Название", artist: "Артист", cover: "musics/covers/moj-trek.jpg" }

  Форматы: MP3, WAV, M4A/AAC, OGG, OPUS, WEBM(audio); FLAC — кроме iOS/Safari.
  WMA/ALAC/APE браузер не играет, их нужно перегнать в mp3.
*/
window.MORALITY_MUSIC = [
  { file: "KRISTIEE - Stevia.mp3", title: "Stevia", artist: "KRISTIEE" },
];
