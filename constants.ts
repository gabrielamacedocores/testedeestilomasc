import type { Question, Styles } from './types';

export const QUESTIONS: Question[] = [
    {
        question: "Como você descreveria sua personalidade?",
        options: [
            { text: "Prático, descontraído e direto", style: "A" },
            { text: "Sofisticado, discreto e com bom gosto", style: "B" },
            { text: "Sério, conservador e focado", style: "C" },
            { text: "Calmo, gentil e sensível", style: "D" },
            { text: "Confiante, magnético e ousado", style: "E" },
            { text: "Moderno, determinado e impactante", style: "F" },
            { text: "Original, curioso e autêntico", style: "G" }
        ]
    },
    {
        question: "Qual desses calçados você mais usa no dia a dia?",
        options: [
            { text: "Tênis básico, chinelo ou bota de caminhada", style: "A" },
            { text: "Sapato de couro bem acabado, bota Chelsea ou mocassim", style: "B" },
            { text: "Sapato social clássico, tipo Oxford ou Derby", style: "C" },
            { text: "Sapatênis de cor clara ou alpargatas", style: "D" },
            { text: "Bota de couro com fivelas ou coturno", style: "E" },
            { text: "Tênis de designer ou bota com sola tratorada", style: "F" },
            { text: "Tênis colorido ou um modelo vintage", style: "G" }
        ]
    },
    {
        question: "Para um evento importante, como um casamento, você escolheria:",
        options: [
            { text: "Uma calça chino com camisa – simples e confortável", style: "A" },
            { text: "Um costume de corte impecável e tecido nobre", style: "B" },
            { text: "Um terno tradicional de cor escura, como preto ou marinho", style: "C" },
            { text: "Um costume de linho ou de cor clara, para um toque leve", style: "D" },
            { text: "Um terno slim fit que valorize o corpo, talvez sem gravata", style: "E" },
            { text: "Um terno com corte moderno, talvez monocromático e sem camisa por baixo", style: "F" },
            { text: "Algo inesperado, como um terno estampado ou uma combinação de peças de alfaiataria com tênis", style: "G" }
        ]
    },
    {
        question: "Qual tipo de acessório mais combina com você?",
        options: [
            { text: "Praticamente nenhum, ou apenas um boné e mochila", style: "A" },
            { text: "Um relógio de design limpo e sofisticado", style: "B" },
            { text: "Um relógio clássico com pulseira de couro", style: "C" },
            { text: "Uma pulseira de contas ou um anel discreto", style: "D" },
            { text: "Uma corrente de prata ou óculos de sol marcantes", style: "E" },
            { text: "Anéis geométricos ou um colar de design arrojado", style: "F" },
            { text: "Meias estampadas, chapéu ou óculos com armação estilosa", style: "G" }
        ]
    },
    {
        question: "Para um encontro casual, qual look você prefere?",
        options: [
            { text: "Jeans, camiseta e tênis", style: "A" },
            { text: "Calça de sarja, camisa de botão e um sapato de couro", style: "B" },
            { text: "Calça social, camisa e sapato clássico", style: "C" },
            { text: "Calça de linho, camisa de botão e mocassim", style: "D" },
            { text: "Calça escura, camisa mais justa e uma jaqueta de couro", style: "E" },
            { text: "Calça cargo, camiseta oversized e um tênis robusto", style: "F" },
            { text: "Uma mistura de peças, como uma calça de alfaiataria com uma camiseta de banda", style: "G" }
        ]
    },
    {
        question: "O que você mais valoriza ao escolher uma roupa?",
        options: [
            { text: "Conforto e praticidade", style: "A" },
            { text: "Qualidade dos tecidos e caimento perfeito", style: "B" },
            { text: "Discrição e atemporalidade", style: "C" },
            { text: "Leveza e tecidos macios", style: "D" },
            { text: "Como a roupa valoriza meu corpo", style: "E" },
            { text: "Design moderno e impacto visual", style: "F" },
            { text: "Originalidade e expressão pessoal", style: "G" }
        ]
    },
    {
        question: "Como você se veste para o trabalho?",
        options: [
            { text: "O mais básico e confortável possível", style: "A" },
            { text: "Peças de qualidade, discretas e bem alinhadas", style: "B" },
            { text: "Formal, geralmente com camisa, calça social e sapato", style: "C" },
            { text: "Roupas de cores claras e tecidos leves, como linho ou algodão", style: "D" },
            { text: "Um look que passe confiança, com peças que vestem bem", style: "E" },
            { text: "Algo moderno, com um toque urbano e talvez um look todo preto", style: "F" },
            { text: "Combinações que mostrem minha personalidade, misturando formal e casual", style: "G" }
        ]
    },
    {
        question: "Qual peça não pode faltar no seu guarda-roupa?",
        options: [
            { text: "Um bom par de jeans e camisetas básicas", style: "A" },
            { text: "Uma camisa de linho ou um blazer bem cortado", style: "B" },
            { text: "Um terno clássico ou uma camisa social branca", style: "C" },
            { text: "Um suéter de malha macia ou uma calça de sarja clara", style: "D" },
            { text: "Uma jaqueta de couro ou uma camisa slim fit", style: "E" },
            { text: "Uma jaqueta bomber diferente ou uma calça com corte moderno", style: "F" },
            { text: "Uma camisa estampada ou um par de tênis bem chamativo", style: "G" }
        ]
    },
    {
        question: "Em um dia corrido, como você monta um look?",
        options: [
            { text: "Pego o que for mais fácil e confortável, sem pensar muito", style: "A" },
            { text: "Tenho peças-chave que sempre deixam o look arrumado", style: "B" },
            { text: "Vou direto no meu 'uniforme' de peças neutras e clássicas", style: "C" },
            { text: "Escolho algo leve e de cor clara para me sentir bem", style: "D" },
            { text: "Busco uma peça que me dê confiança, mesmo na pressa", style: "E" },
            { text: "Pego uma peça de destaque e construo o look a partir dela", style: "F" },
            { text: "Misturo o que vier à cabeça, gosto de experimentar", style: "G" }
        ]
    },
    {
        question: "Em qual dessas situações você se sentiria mais desconfortável?",
        options: [
            { text: "Usando um terno apertado que limita meus movimentos", style: "A" },
            { text: "Com uma roupa de baixa qualidade ou mal acabada", style: "B" },
            { text: "Vestindo algo muito chamativo ou da última moda", style: "C" },
            { text: "Com um look todo preto e pesado", style: "D" },
            { text: "Usando roupas largas que escondem a forma do corpo", style: "E" },
            { text: "Com um visual básico demais, sem nenhum destaque", style: "F" },
            { text: "Vestido de forma muito tradicional ou 'certinha'", style: "G" }
        ]
    },
    {
        question: "Em uma viagem, o que não pode faltar na sua mala?",
        options: [
            { text: "Roupas básicas e versáteis, fáceis de combinar", style: "A" },
            { text: "Um look mais arrumado para um jantar ou evento especial", style: "B" },
            { text: "Uma camisa social para qualquer imprevisto formal", style: "C" },
            { text: "Peças leves, como bermudas de linho e camisetas de algodão", style: "D" },
            { text: "Uma jaqueta de couro e uma camisa que vista bem", style: "E" },
            { text: "Um tênis estiloso e peças-chave que definem seu visual", style: "F" },
            { text: "Peças coloridas e estampadas para sair do óbvio", style: "G" }
        ]
    },
    {
        question: "Quais características você mais admira no estilo de outros homens?",
        options: [
            { text: "A naturalidade e o conforto", style: "A" },
            { text: "A elegância discreta e o bom gosto", style: "B" },
            { text: "A seriedade e a consistência", style: "C" },
            { text: "A leveza e a simplicidade", style: "D" },
            { text: "A autoconfiança e a atitude", style: "E" },
            { text: "A ousadia e a modernidade", style: "F" },
            { text: "A originalidade e a criatividade", style: "G" }
        ]
    },
    {
        question: "Qual dessas peças você não usaria de jeito nenhum?",
        options: [
            { text: "Um terno formal e muito justo, que limita os movimentos.", style: "A" },
            { text: "Uma roupa de baixa qualidade ou com acabamento ruim.", style: "B" },
            { text: "Algo muito chamativo, rasgado ou da última moda.", style: "C" },
            { text: "Um look todo preto e pesado, com peças de couro.", style: "D" },
            { text: "Roupas muito largas que escondem completamente a forma do corpo.", style: "E" },
            { text: "Um look básico demais, sem nenhuma peça marcante.", style: "F" },
            { text: "Um visual 'certinho' e sem personalidade.", style: "G" }
        ]
    }
];

export const TIE_BREAKER_QUESTIONS: { primary: Question, secondary: Question } = {
    primary: {
        question: "Qual desses acessórios é indispensável para você?",
        options: [
            { text: "Boné ou mochila prática", style: "A" },
            { text: "Relógio de design limpo e sofisticado", style: "B" },
            { text: "Relógio clássico com pulseira de couro", style: "C" },
            { text: "Pulseira de contas ou um anel discreto", style: "D" },
            { text: "Corrente de prata ou óculos de sol marcantes", style: "E" },
            { text: "Anéis geométricos ou um colar de design arrojado", style: "F" },
            { text: "Chapéu, óculos com armação estilosa ou meias estampadas", style: "G" }
        ]
    },
    secondary: {
        question: "Qual corte de cabelo mais te agrada?",
        options: [
            { text: "Curto e prático, sem complicação", style: "A" },
            { text: "Corte alinhado, com acabamento impecável", style: "B" },
            { text: "Penteado clássico, como o social ou repartido de lado", style: "C" },
            { text: "Cabelo um pouco mais longo, com aspecto natural", style: "D" },
            { text: "Topete com volume ou um corte que chame atenção", style: "E" },
            { text: "Undercut, moicano moderno ou um corte assimétrico", style: "F" },
            { text: "Colorido, comprido ou um penteado fora do padrão", style: "G" }
        ]
    }
};

export const STYLES: Styles = {
    "A": {
        name: "ESTILO CASUAL",
        subtitle: "Também conhecido como ESPORTIVO ou NATURAL",
        description: "Você é prático, espontâneo e valoriza o conforto acima de tudo. Seu estilo reflete um modo de vida descontraído, com peças funcionais, fáceis de usar e que te deixam à vontade em qualquer situação.",
        secondaryDescription: "O estilo casual aparece na sua imagem como um toque de leveza e praticidade. Mesmo quando você precisa se vestir de forma mais arrumada, ainda busca elementos que garantam seu conforto e mantenham a simplicidade.",
        color: "#FF0018",
        image: "https://i.imgur.com/dY28PY0.png",
        characteristics: [
            "Seu visual transmite autenticidade, liberdade e bem-estar;",
            "Jeans, camisetas, tênis e moletons são a base do seu guarda-roupa;",
            "Você prefere tecidos naturais e modelagens que não limitem seus movimentos;",
            "Não se prende a regras de moda e prioriza o que funciona para você;",
            "Seu estilo é simples, direto e cheio de verdade."
        ]
    },
    "B": {
        name: "ESTILO ELEGANTE",
        subtitle: "Também conhecido como SOFISTICADO",
        description: "Você tem um estilo refinado, atual e equilibrado. Gosta de transmitir uma imagem de bom gosto, sem excessos. Suas escolhas de roupa mostram qualidade, atenção aos detalhes e uma presença discreta, mas marcante.",
        secondaryDescription: "O estilo elegante surge em você como um detalhe de sofisticação. Pode ser um tecido mais nobre, um acabamento refinado ou uma peça bem cortada que eleva seu visual, mesmo em combinações casuais.",
        color: "#FFA52C",
        image: "https://i.imgur.com/48cWyV8.png",
        characteristics: [
            "Prefere peças com caimento impecável, tecidos de qualidade e cortes limpos;",
            "Você é moderno, discreto e valoriza a harmonia no visual;",
            "Investe em peças duráveis e atemporais, mas com um toque atual;",
            "Sua imagem é sempre alinhada, limpa e sofisticada;",
            "Você se comunica com sutileza e classe."
        ]
    },
    "C": {
        name: "ESTILO CLÁSSICO",
        subtitle: "Também conhecido como TRADICIONAL",
        description: "Você preza pela segurança, ordem e seriedade. Seu estilo é atemporal, conservador e transmite respeito e confiança. Você prefere peças discretas, com cortes retos, cores neutras e que se mantêm relevantes com o tempo.",
        secondaryDescription: "O clássico se manifesta em você com um ar de formalidade e estrutura. Mesmo que não seja seu estilo principal, você valoriza peças alinhadas e neutras, principalmente para situações que pedem mais seriedade.",
        color: "#FFFF41",
        image: "https://i.imgur.com/h7kjTjv.png",
        characteristics: [
            "O visual clássico é formal, alinhado e transmite autoridade;",
            "Você não busca chamar atenção, mas sim mostrar consistência e credibilidade;",
            "Ternos, blazers, camisas e sapatos sociais são peças-chave;",
            "Sua paleta de cores é sóbria, com foco em azul-marinho, cinza e preto;",
            "Sua imagem é coerente, firme e inspira confiança."
        ]
    },
    "D": {
        name: "ESTILO ROMÂNTICO",
        subtitle: "",
        description: "Seu estilo é gentil, acolhedor e valoriza a leveza. Você transmite uma imagem amigável e sensível, com peças de cores claras, tecidos fluidos e um caimento que prioriza o bem-estar e a harmonia.",
        secondaryDescription: "O estilo romântico aparece como um detalhe de leveza e sensibilidade no seu visual. Pode ser uma camisa de linho, um suéter de cor clara ou a preferência por peças que não sejam muito pesadas, equilibrando sua imagem com um toque de tranquilidade e gentileza.",
        color: "#008018",
        image: "https://i.imgur.com/EKZpxFB.png",
        characteristics: [
            "Seu visual transmite serenidade, cuidado e gentileza;",
            "Prefere cores neutras e claras, como branco, bege, azul claro e tons pastel;",
            "Peças em linho, algodão e malhas macias são suas favoritas;",
            "Sua imagem passa conforto, harmonia e acessibilidade;",
            "Você atrai pela simplicidade e pela calma que transmite."
        ]
    },
    "E": {
        name: "ESTILO SENSUAL",
        subtitle: "Também conhecido como SEXY ou MAGNÉTICO",
        description: "Você tem uma presença marcante, é autoconfiante e não tem medo de se destacar. Seu estilo valoriza o corpo e a atitude. Gosta de roupas que ressaltam a silhueta, com cortes mais justos, tecidos que marcam e um toque de ousadia.",
        secondaryDescription: "O sensual aparece sutilmente na sua imagem, seja por uma camisa mais ajustada, uma gola V ou na forma como você valoriza sua silhueta em momentos específicos. Um toque de poder que entra na medida certa.",
        color: "#00C0FF",
        image: "https://i.imgur.com/bMsqHr6.png",
        characteristics: [
            "Prefere looks que valorizam o físico e tecidos como couro ou malhas justas;",
            "Escolhe acessórios que chamam atenção, como correntes e relógios robustos;",
            "A autoconfiança é sua principal forma de expressão;",
            "Seu visual é poderoso, envolvente e cheio de atitude;",
            "Quando você chega, sua presença é notada."
        ]
    },
    "F": {
        name: "ESTILO DRAMÁTICO",
        subtitle: "Também conhecido como URBANO ou MODERNO",
        description: "Você tem um estilo moderno, marcante e visualmente forte. Gosta de ousar nos cortes, volumes e contrastes. Sua imagem transmite personalidade, atitude e uma visão de vanguarda sobre a moda.",
        secondaryDescription: "O estilo dramático aparece em detalhes marcantes: um corte ousado, uma peça de impacto ou uma escolha de cor que foge do óbvio. Mesmo com moderação, sua imagem carrega uma presença forte e contemporânea.",
        color: "#0000F9",
        image: "https://i.imgur.com/sUemA0k.png",
        characteristics: [
            "Prefere roupas impactantes e cores escuras ou looks monocromáticos;",
            "Aprecia assimetrias, sobreposições e peças oversized;",
            "Escolhe peças com design diferenciado e referências urbanas;",
            "Gosta de comunicar força e estilo através da imagem;",
            "Seu visual tem impacto, presença e originalidade."
        ]
    },
    "G": {
        name: "ESTILO CRIATIVO",
        subtitle: "",
        description: "Você é livre, curioso e não tem medo de experimentar. Seu estilo é único, cheio de personalidade e impossível de rotular. Gosta de misturar cores, estampas, texturas e referências, criando combinações que só você entende.",
        secondaryDescription: "O criativo surge no seu visual como uma pitada de ousadia. Seja em uma estampa diferente, uma mistura inusitada de estilos ou um acessório fora do comum, esse estilo deixa claro que você gosta de se expressar com originalidade.",
        color: "#86007D",
        image: "https://i.imgur.com/CDdziuG.png",
        characteristics: [
            "Adora peças diferentes, com design autoral ou vintage;",
            "Valoriza itens com história e significado;",
            "Vê a moda como uma extensão da sua criatividade;",
            "Sua imagem passa autenticidade e irreverência;",
            "É impossível não te notar: seu estilo é expressão pura."
        ]
    }
};