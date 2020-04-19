export default {
  general: {
    welcome: 'Vítejte',
    signIn: 'Přihlásit se',
    logout: 'Odhlásit se',
    signUp: 'Registrovat',
    forgotPassword: 'Zapomenuté heslo',
    language: 'Jazyk',
    role: 'Role',
    resetPassword: 'Resetovat heslo',
    sendResetLink: 'Poslat odkaz na resetováné hesla',
    signInForm: 'Přihlašovací formulář',
    signUpForm: 'Registrační formulář',
    acceptCheckbox: 'Souhlasím s ',
    acceptComercialMessages: 'Souhlasím se zasíláním reklamních sdělení.',
    labelName: 'jméno',
    labelPassword: 'heslo',
    labelPasswordAgain: 'heslo znovu',
    verifyEmail: 'Ověření e-mailové adresy',
    resendToken: 'Znovu odeslat ověřovací e-mail',
    verifyEmailAction: 'Ověřit',
    backToVerification: 'Zpět na ověření',
    contentNeedsLoginMessage:
      'Tato část webové aplikace je dostupná pouze pro přihlášené uživatele.'
  },
  navigation: {
    home: 'Domů',
    votingResults: 'Výsledky hlasování',
    termsAndConditions: 'Podmínky užití',
    verifyMail: 'Ověřit e-mail',
    listOfCurrentVotings: 'Seznam probíhajících hlasování',
    listOfPastVotings: 'Seznam proběhlých hlasování',
    listOfForms: 'Seznam formulářů',
    createNewVoterForm: 'Vytvořit nový hlasovací formulář'
  },
  anonym: {
    title: 'Seznam veřejných hlasování',
    showResults: 'Zobrazit výsledky'
  },
  voter: {
    title: 'Seznam hlasování',
    showResults: 'Zobrazit výsledky',
    vote: 'Hlasovat',
    question: 'Otázka ', // otázka 1 -> Question 1
    labelDoNotWantToAnswer: 'Nechci odpovědět.',
    submitForm: 'Odeslat formulář',
    signVoteInApp: 'Nyní podepiště Váš hlas v podpisové aplikaci',
    signAppNotFound: 'Podpisová aplikace nebyla nalezena',
    startSignAppForProceed:
      'Pro pokračování v hlasování si spusťně naši podpisovou aplikaci',
    backButton: 'Zpět',
    table: {
      formListName: 'Název formuláře',
      openFrom: 'Otevřené od',
      openUntil: 'Otevřené do',
      voterList: 'Seznam voličů',
      actions: 'Akce'
    }
  },
  votingFormManager: {
    title: 'Správa hlasovacích formulářů',
    showResults: 'Zobrazit výsledky',
    edit: 'Editovat',
    questionText: 'otázka', // 1. otázka -> 1. question
    possibleAnswers: 'Možné odpovědi',
    addNewPossibleAnswer: 'Přidat další možnost',
    saveQuestion: 'Uložit otázku',
    removeQuestion: 'Smazat otázku',
    createFormTitleText: 'Vítejte, zde si můžeme vytvořit vlastní hlasování.',
    formName: 'Název formuláře',
    placeholderFormName: 'Zde uveďte název formuláře',
    formOpenUntil: 'Formulář bude dostupný do',
    voterListId: 'ID skupiny hlasujících',
    placeholderVoterListId: 'Zde uveďte ID seznamu hlasujících',
    questions: 'Otázky:',
    addNewQuestion: 'Přidat novou otázku',
    saveForm: 'Uložit formulář',
    table: {
      formListName: 'Název formuláře',
      openFrom: 'Otevřené od',
      openUntil: 'Otevřené do',
      isPublic: 'Veřejné',
      voterList: 'Seznam voličů',
      actions: 'Akce'
    }
  },
  votingListManager: {
    title: 'Správa hlasovacích skupin',
    showDetails: 'Zobrazit detaily',
    createNewVoterList: 'Vytvořit novou skupinu voličů',
    labelListName: 'Název voličské skupiny',
    labelIsPubli: 'Skupina je veřejná',
    continue: 'Pokračovat',
    voters: 'Voliči',
    voterListDetail: 'Detaily skupiny voličů',
    addVoter: 'Přidat voliče',
    labelVoterEmail: 'E-mail voliče',
    labelVoterSubmittedGDPR: 'Volič poskytl souhlas s GDPR',
    labelSingFile: 'Podpisový soubor',
    labelIsQes: 'Jedná se o QES?',
    published: 'Veřejný',
    unpublished: 'Neveřejný',
    indexTable: {
      voterListName: 'Název skupiny voličů',
      actions: 'Akce'
    },
    votersTable: {
      voterName: 'Jméno voliče',
      voterEmail: 'E-mail voliče',
      voterQes: 'Kvalifikovaný elektronický podpis',
      actions: 'Akce'
    }
  },
  errorPage: {
    getMeOut: 'Rychle odsud pryč!'
  }
}
