document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var eyesColorWizards = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
]; 
var eyesColorWizards = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
];
var namesWizards = [
    'Иван',
    'Хуан',
    'Мария',
    'Кристоф',
    'Виктор', 
    'Юлия',
    'Люпита',
    'Вашингтон'
];
var secondNamesWizads = [
    'да Марья',
    'Верон',
    'Мирабелла', 
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг' 
];

var wizardParams = [
    {
        name: namesWizards[Math.ceil(Math.random() * 7)] + " " + secondNamesWizads[Math.ceil(Math.random()  *7)] ,
        coatColor: eyesColorWizards[Math.ceil(Math.random() * 4)],
        eyesColor: eyesColorWizards[Math.ceil(Math.random() * 5)]
    },
    {
        name: namesWizards[Math.ceil(Math.random() * 7)] + " " + secondNamesWizads[Math.ceil(Math.random() * 7)] ,
        coatColor: eyesColorWizards[Math.ceil(Math.random() * 4)],
        eyesColor: eyesColorWizards[Math.ceil(Math.random() * 5)]
    },
    {
        name: namesWizards[Math.ceil(Math.random() * 7)] + " " + secondNamesWizads[Math.ceil(Math.random() * 7)] ,
        coatColor: eyesColorWizards[Math.ceil(Math.random() * 4)],
        eyesColor: eyesColorWizards[Math.ceil(Math.random() * 5)]
    },
    {
        name: namesWizards[Math.ceil(Math.random() * 7)] + " " + secondNamesWizads[Math.ceil(Math.random() * 7)] ,
        coatColor: eyesColorWizards[Math.ceil(Math.random() * 4)],
        eyesColor: eyesColorWizards[Math.ceil(Math.random() * 5)]
    },
];

var listWizards = document.querySelector(".setup-similar-list");
var simularListWizards = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
for (var i = 0; i < wizardParams.length; i++) {
    var wizardElement = simularListWizards.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizardParams[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardParams[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardParams[i].eyesColor; 
    listWizards.appendChild(wizardElement);
}