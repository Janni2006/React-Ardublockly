import React from 'react';

export const tours = [
    {
        ui: [
            {
                selector: ".blocklyWindow",
                content: <div>
                    <h2>Willkommen zu Blockly für die senseBox</h2>
                    <p>Wir zeigen dir kurz die wichtigen Funktionen der Oberfläche.</p>
                    <p>Dies ist deine Arbeitsfläche. Hier werden die Blöcke zusammengesetzt und das Programm erstellt</p>
                </div>,
            },
            {
                selector: ".blocklyToolboxDiv",
                content: 'In der Toolbox befinden sich alle Blöcke. Ziehe diese einfach aus der Toolbox in die Arbeitsfläche und beginne mit dem Programmieren',
            },
            {
                selector: '.workspaceFunc',
                content: 'Nach dem Programmieren findest du hier alle Buttons um dein Programm zu übertragen, zu speichern oder zu teilen',
            },
            {
                selector: ".compileBlocks",
                content: <p>Über diesen Button kannst du ein Programm kompilieren lassen, um es anschließend auf deine senseBox zu übertragen</p>,
            },
            {
                selector: ".saveBlocks",
                content: <p>Speichere deine Blöcke als XML-Datei auf dem Computer...</p>,
            },
            {
                selector: ".shareBlocks",
                content: <p>... oder Teile deine Blöcke über einen Link mit anderen Nutzer:innen</p>,
            },
            {
                selector: ".MenuButton",
                content:
                    <div>
                        <p>Über das Menü kommst du zu den Tutorials, zur Gallery und zu den Einstellungen</p>
                    </div>
            },
        ],
        assessment: [
            {
                selector: ".injectionDiv",
                content: <div>
                    <h2>Los gehts</h2>
                    <p>Erstelle hier eine Lösung für die Aufgabe</p>
                </div>,
            },
            {
                selector: '.taskName',
                content: <div>
                    <h2>Aufgabenstellung</h2>
                    <p>Die Aufgabestellung findest du hier</p>
                </div>
            },
            {
                selector: ".blocklyToolboxDiv",
                content: <div>
                    <p>Dir stehen alle Blöcke aus der Toolbox zur verfügung. Versuche die Lösung mit so wenig Blöcken wie möglich umzusetzen.</p>
                </div>,
            },
            {
                selector: '.solutionCheck',
                content: <div>
                    <h2>Lösung überprüfen</h2>
                    <p>
                        Zum überprüfen deiner Lösung klicke einfach auf diesen Button. Wenn deine Lösung richtig ist erhälst du eine kompilierte Datei, die du auf deine senseBox MCU übertragen kannst.
                    </p>
                </div>
            },
        ]
    }
];




