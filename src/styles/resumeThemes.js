import {  MasterTheme } from 'styles/MasterTheme';

const {
  muli,
  merriweather,
  times,
  bangers,
  questrial,
  droidserif,
  railway, // 400, 600, 800
  lato,
  light,
  normal,
  bold,
  orange,
  lightGray,
  midGray,
  darkGray,
  white
} = MasterTheme;
// please use our white and orange to allow for easy future tweaking

const themeGlobals = {
  Default: {
    nameFont: questrial,
    nameFontSize: '30px',

    resumeHeaderFont: muli,
    resumeHeaderFontSize: '12px',

    headingsFont: questrial,
    headingsFontSize: '14px',

    jobTitleFont: muli,
    jobTitleFontSize: '12px',

    bulletFont: muli,
    bulletFontSize: '10px',

    accentColor: 'rgb(11, 116, 148)',
    accentColorBG: lightGray,
    linkColor: 'rgb(11, 116, 148)',
    sideMargin: '60px',
    topMargin: '40px'
  },
  Experienced: {
    nameFont: droidserif,
    nameFontSize: '35px',

    resumeHeaderFont: droidserif,
    resumeHeaderFontSize: '10px',

    headingsFont: droidserif,
    headingsFontSize: '14px',

    jobTitleFont: times,
    jobTitleFontSize: '12px',

    bulletFont: times,
    bulletFontSize: '10px',

    accentColor: darkGray,
    accentColorBG: lightGray,
    linkColor: darkGray,
    sideMargin: '40px',
    topMargin: '30px'
  },
  Innovator: {
    nameFont: railway,
    nameFontSize: '30px',

    resumeHeaderFont: lato,
    resumeHeaderFontSize: '12px',

    headingsFont: lato,
    headingsFontSize: '16px',

    jobTitleFont: lato,
    jobTitleFontSize: '14px',

    bulletFont: lato,
    bulletFontSize: '12px',

    accentColor: darkGray,
    accentColorBG: lightGray,
    linkColor: darkGray,
    sideMargin: '50px',
    topMargin: '40px'
  }
  // ,Corporate: {
  //   name: droidserif,
  //   headers: questrial,
  //   body: droidserif,
  //   bullets: times,
  //   accentColor: orange,
  //   accentColorBG: lightGray,
  //   linkColor: 'rgb(128, 169, 135)'
  // },
  // Party: {
  //   name: bangers,
  //   headers: questrial,
  //   body: droidserif,
  //   bullets: times,
  //   accentColor: orange,
  //   accentColorBG: lightGray,
  //   linkColor: 'rgb(128, 169, 135)'
  // }
}

export const resumeThemes = {

  'Modern': {
    headerDiv: {
      // backgroundColor: 'rgba(255,100,100, .1)',
      paddingTop: themeGlobals.Default.topMargin,
      paddingLeft: themeGlobals.Default.sideMargin,
      paddingRight: themeGlobals.Default.sideMargin,
      position: 'relative' //keep this so child el go where they should
    },
    headerNameDiv: {
      // backgroundColor: 'rgba(255,100,100, .1)'
      display: 'inline',
      position: 'relative',
    },
    headerContactDiv: {
      // backgroundColor: 'rgba(100,100,255,.1)'
      position: 'relative',
    },
    headerLinksDiv: {
      // backgroundColor: 'rgba(100,255,100, .1)',
      position: 'absolute',
      right: themeGlobals.Default.sideMargin,
      // top: themeGlobals.Default.topMargin,
      bottom: '10px',
      textAlign: 'right'
    },



    name: {
      display: 'inline-block',
      fontWeight: '800',
      textAlign: 'left',
      fontSize: themeGlobals.Default.nameFontSize,
      fontFamily: themeGlobals.Default.nameFont,
      color: themeGlobals.Default.accentColor
    },



    location: {
      display: 'block',
      fontSize: themeGlobals.Default.resumeHeaderFontSize,
      fontFamily: themeGlobals.Default.resumeHeaderFont
    },
    state: {},

    phone: {
      cursor: 'text',
      display: 'inline-block',
      position: 'relative',
      fontSize: themeGlobals.Default.resumeHeaderFontSize,
      fontFamily: themeGlobals.Default.resumeHeaderFont
    },

    headerPipe: {
      display: 'inline-block',
      marginLeft: '6px',
      marginRight: '6px',
      color: themeGlobals.Default.accentColor,
      fontSize: themeGlobals.Default.resumeHeaderFontSize,
      fontFamily: themeGlobals.Default.resumeHeaderFont
    },

    email: {
      color: themeGlobals.Default.linkColor,
      display: 'inline-block',
      position: 'relative',
      fontSize: themeGlobals.Default.resumeHeaderFontSize,
      fontFamily: themeGlobals.Default.resumeHeaderFont
    },



    webLinkedin: {
      color: themeGlobals.Default.linkColor,
      display: 'block',
      fontSize: themeGlobals.Default.resumeHeaderFontSize,
      fontFamily: themeGlobals.Default.resumeHeaderFont
    },
    webOther: {
      color: themeGlobals.Default.linkColor,
      display: 'inline-block',
      fontSize: themeGlobals.Default.resumeHeaderFontSize,
      fontFamily: themeGlobals.Default.resumeHeaderFont
    },


    headerDividerLine: {
      backgroundColor: 'white',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      height: '1px',
      width: '90%',
      marginTop: '10px'
    },


    pipe: {
      display: 'inline',
      margin: '0px 5px',
      color: themeGlobals.Default.accentColor
    },
    jobTitle: {
      display: 'inline-block',
      cursor: 'text',
      margin: '0px 5px',
      fontWeight: '700',
      fontSize: themeGlobals.Default.jobTitleFontSize,
      fontFamily: themeGlobals.Default.jobTitleFont
    },
    companyName: {
      display: 'inline-block',
      margin: '0px 5px',
      cursor: 'text',
      fontWeight: '500',
      fontSize: themeGlobals.Default.jobTitleFontSize,
      fontFamily: themeGlobals.Default.jobTitleFont,
    },
    jobLocation: {
      display: 'inline-block',
      margin: '0px 5px',
      cursor: 'text',
      fontSize: themeGlobals.Default.jobTitleFontSize,
      fontFamily: themeGlobals.Default.jobTitleFont,
    },
    jobYear: {
      display: 'inline-block',
      cursor: 'text',
      position: 'absolute',
      top: '3px',
      right: '0px',
      fontSize: themeGlobals.Default.jobTitleFontSize,
      fontFamily: themeGlobals.Default.jobTitleFont,
    },


    headingTitle: {
      fontWeight: 'bold',
      fontSize: '14px',
      paddingTop: '10px',
      fontSize: themeGlobals.Default.headingsFontSize,
      fontFamily: themeGlobals.Default.headingsFont
    },
    headingText: {
      fontFamily: themeGlobals.Default.bulletFont,
      fontSize: themeGlobals.Default.bulletFontSize,
      marginTop: '5px',
      marginLeft: '8%'
    },


    bulletText: {
      fontFamily: themeGlobals.Default.bulletFont,
      fontSize: themeGlobals.Default.bulletFontSize,
      marginTop: '6px'
    },



    blockDiv: {
      marginLeft: themeGlobals.Default.sideMargin,
      marginRight: themeGlobals.Default.sideMargin,
      position: 'relative'
    },

    headingDiv: {
      marginLeft: themeGlobals.Default.sideMargin,
      marginRight: themeGlobals.Default.sideMargin,
      position: 'relative',
      borderStyle: 'solid',
      borderWidth: '1px 0px 0px 0px',
      borderColor: themeGlobals.Default.accentColor

    }
  },



































  'Experienced': {
    headerDiv: {
      // backgroundColor: 'rgba(255,100,100, .1)',
      paddingTop: themeGlobals.Experienced.topMargin,
      paddingLeft: themeGlobals.Experienced.sideMargin,
      paddingRight: themeGlobals.Experienced.sideMargin,
      position: 'relative', //keep this so child el go where they should
      height: '100px'
    },
    headerNameDiv: {
      // backgroundColor: 'rgba(255,100,100, .1)',
      display: 'inline',
      position: 'absolute',
      left: 'calc(50% - 120px)',
      textAlign: 'center',
      bottom: 0
    },
    headerContactDiv: {
      // backgroundColor: 'rgba(100,100,255,.1)',
      position: 'absolute',
      left: themeGlobals.Experienced.sideMargin,
      bottom: 0,
      textAlign: 'left'
    },
    headerLinksDiv: {
      // backgroundColor: 'rgba(100,255,100, .1)',
      position: 'absolute',
      right: themeGlobals.Experienced.sideMargin,
      bottom: 0,
      textAlign: 'right'
    },



    name: {
      display: 'inline-block',
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: themeGlobals.Experienced.nameFontSize,
      fontFamily: themeGlobals.Experienced.nameFont,
      color: themeGlobals.Experienced.accentColor
    },



    location: {
      display: 'block',
      fontSize: themeGlobals.Experienced.resumeHeaderFontSize,
      fontFamily: themeGlobals.Experienced.resumeHeaderFont
    },
    state: {},

    phone: {
      cursor: 'text',
      display: 'inline-block',
      position: 'relative',
      fontSize: themeGlobals.Experienced.resumeHeaderFontSize,
      fontFamily: themeGlobals.Experienced.resumeHeaderFont
    },

    headerPipe: {
      display: 'inline-block',
      marginLeft: '6px',
      marginRight: '6px',
      color: themeGlobals.Experienced.accentColor,
      fontSize: themeGlobals.Experienced.resumeHeaderFontSize,
      fontFamily: themeGlobals.Experienced.resumeHeaderFont
    },

    email: {
      color: themeGlobals.Experienced.linkColor,
      display: 'inline-block',
      position: 'relative',
      fontSize: themeGlobals.Experienced.resumeHeaderFontSize,
      fontFamily: themeGlobals.Experienced.resumeHeaderFont
    },



    webLinkedin: {
      color: themeGlobals.Experienced.linkColor,
      display: 'block',
      fontSize: themeGlobals.Experienced.resumeHeaderFontSize,
      fontFamily: themeGlobals.Experienced.resumeHeaderFont
    },
    webOther: {
      color: themeGlobals.Experienced.linkColor,
      display: 'inline-block',
      fontSize: themeGlobals.Experienced.resumeHeaderFontSize,
      fontFamily: themeGlobals.Experienced.resumeHeaderFont
    },



    headerDividerLine: {
      backgroundColor: themeGlobals.Experienced.accentColor,
      position: 'absolute',
      bottom: '0px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      height: '1px',
      width: 930 - themeGlobals.Experienced.sideMargin * 2 + 'px',
      // this is fragile, based on ResumeViewStyles final paperwidth
      marginTop: '5px'
    },


    pipe: {
      display: 'inline',
      margin: '0px 5px',
      color: themeGlobals.Experienced.accentColor
    },
    jobTitle: {
      display: 'inline-block',
      cursor: 'text',
      margin: '0px 5px',
      fontWeight: '700',
      fontSize: themeGlobals.Experienced.jobTitleFontSize,
      fontFamily: themeGlobals.Experienced.jobTitleFont
    },
    companyName: {
      display: 'inline-block',
      margin: '0px 5px',
      cursor: 'text',
      fontWeight: '500',
      fontSize: themeGlobals.Experienced.jobTitleFontSize,
      fontFamily: themeGlobals.Experienced.jobTitleFont,
    },
    jobLocation: {
      display: 'inline-block',
      margin: '0px 5px',
      cursor: 'text',
      fontSize: themeGlobals.Experienced.jobTitleFontSize,
      fontFamily: themeGlobals.Experienced.jobTitleFont,
    },
    jobYear: {
      display: 'inline-block',
      cursor: 'text',
      position: 'absolute',
      top: '3px',
      right: '0px',
      fontSize: themeGlobals.Experienced.jobTitleFontSize,
      fontFamily: themeGlobals.Experienced.jobTitleFont,
    },


    headingTitle: {
      fontWeight: 'bold',
      fontSize: '14px',
      paddingTop: '5px',
      fontSize: themeGlobals.Experienced.headingsFontSize,
      fontFamily: themeGlobals.Experienced.headingsFont
    },
    headingText: {
      fontFamily: themeGlobals.Experienced.bulletFont,
      fontSize: themeGlobals.Experienced.bulletFontSize,
      marginTop: '5px',
      // marginLeft: '8%'
    },


    bulletText: {
      fontFamily: themeGlobals.Experienced.bulletFont,
      fontSize: themeGlobals.Experienced.bulletFontSize,
      marginTop: '6px'
    },


    blockDiv: {
      marginLeft: themeGlobals.Experienced.sideMargin,
      marginRight: themeGlobals.Experienced.sideMargin,
      position: 'relative'
    },

    headingDiv: {
      marginLeft: themeGlobals.Experienced.sideMargin,
      marginRight: themeGlobals.Experienced.sideMargin,
      position: 'relative'
    }
  },























  'Innovator': {
    headerDiv: {
      // backgroundColor: 'rgba(255,100,100, .1)',
      paddingTop: themeGlobals.Innovator.topMargin,
      paddingLeft: themeGlobals.Innovator.sideMargin,
      paddingRight: themeGlobals.Innovator.sideMargin,
      position: 'relative', //keep this so child el go where they should
      height: '100px',
      paddingBottom: '10px'
    },
    headerNameDiv: {
      // backgroundColor: 'rgba(255,100,100, .1)',
      display: 'inline',
      position: 'absolute',
      left: themeGlobals.Innovator.sideMargin,
      textAlign: 'left',
      bottom: 0
    },
    headerContactDiv: {
      // backgroundColor: 'rgba(100,100,255,.1)',
      position: 'absolute',
      left: 'calc(50% - 120px)',
      bottom: 0,
      textAlign: 'left'
    },
    headerLinksDiv: {
      // backgroundColor: 'rgba(100,255,100, .1)',
      position: 'absolute',
      right: themeGlobals.Innovator.sideMargin,
      bottom: 0,
      textAlign: 'right'
    },



    name: {
      display: 'inline-block',
      fontWeight: '800',
      textAlign: 'left',
      fontSize: themeGlobals.Innovator.nameFontSize,
      fontFamily: themeGlobals.Innovator.nameFont,
      color: themeGlobals.Innovator.accentColor
    },



    location: {
      display: 'block',
      fontSize: themeGlobals.Innovator.resumeHeaderFontSize,
      fontFamily: themeGlobals.Innovator.resumeHeaderFont
    },
    state: {},

    phone: {
      cursor: 'text',
      display: 'inline-block',
      position: 'relative',
      fontSize: themeGlobals.Innovator.resumeHeaderFontSize,
      fontFamily: themeGlobals.Innovator.resumeHeaderFont
    },

    headerPipe: {
      display: 'inline-block',
      marginLeft: '6px',
      marginRight: '6px',
      color: themeGlobals.Innovator.accentColor,
      fontSize: themeGlobals.Innovator.resumeHeaderFontSize,
      fontFamily: themeGlobals.Innovator.resumeHeaderFont
    },

    email: {
      color: themeGlobals.Innovator.linkColor,
      display: 'inline-block',
      position: 'relative',
      fontSize: themeGlobals.Innovator.resumeHeaderFontSize,
      fontFamily: themeGlobals.Innovator.resumeHeaderFont
    },



    webLinkedin: {
      color: themeGlobals.Innovator.linkColor,
      display: 'block',
      fontSize: themeGlobals.Innovator.resumeHeaderFontSize,
      fontFamily: themeGlobals.Innovator.resumeHeaderFont
    },
    webOther: {
      color: themeGlobals.Innovator.linkColor,
      display: 'inline-block',
      fontSize: themeGlobals.Innovator.resumeHeaderFontSize,
      fontFamily: themeGlobals.Innovator.resumeHeaderFont
    },



    headerDividerLine: {
      backgroundColor: 'white',
      position: 'absolute',
      bottom: '0px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      height: '1px',
      width: 930 - themeGlobals.Innovator.sideMargin * 2 + 'px',
      // this is fragile, based on ResumeViewStyles final paperwidth
      marginTop: '5px'
    },


    pipe: {
      display: 'inline',
      margin: '0px 5px',
      color: themeGlobals.Innovator.accentColor
    },
    jobTitle: {
      display: 'inline-block',
      cursor: 'text',
      margin: '0px 5px',
      fontWeight: '700',
      fontSize: themeGlobals.Innovator.jobTitleFontSize,
      fontFamily: themeGlobals.Innovator.jobTitleFont
    },
    companyName: {
      display: 'inline-block',
      margin: '0px 5px',
      cursor: 'text',
      fontWeight: '500',
      fontSize: themeGlobals.Innovator.jobTitleFontSize,
      fontFamily: themeGlobals.Innovator.jobTitleFont,
    },
    jobLocation: {
      display: 'inline-block',
      margin: '0px 5px',
      cursor: 'text',
      fontSize: themeGlobals.Innovator.jobTitleFontSize,
      fontFamily: themeGlobals.Innovator.jobTitleFont,
    },
    jobYear: {
      display: 'inline-block',
      cursor: 'text',
      position: 'absolute',
      top: '3px',
      right: '0px',
      fontSize: themeGlobals.Innovator.jobTitleFontSize,
      fontFamily: themeGlobals.Innovator.jobTitleFont,
    },


    headingTitle: {
      fontWeight: 'bold',
      fontSize: '14px',
      paddingTop: '10px',
      fontSize: themeGlobals.Innovator.headingsFontSize,
      fontFamily: themeGlobals.Innovator.headingsFont
    },
    headingText: {
      fontFamily: themeGlobals.Innovator.bulletFont,
      fontSize: themeGlobals.Innovator.bulletFontSize,
      marginTop: '5px',
      marginLeft: '4%'
    },


    bulletText: {
      fontFamily: themeGlobals.Innovator.bulletFont,
      fontSize: themeGlobals.Innovator.bulletFontSize,
      marginLeft: '4%',
      marginTop: '12px'
    },


    blockDiv: {
      marginLeft: themeGlobals.Innovator.sideMargin,
      marginLeft: themeGlobals.Innovator.sideMargin,
      position: 'relative'
    },

    headingDiv: {
      marginLeft: themeGlobals.Innovator.sideMargin,
      marginLeft: themeGlobals.Innovator.sideMargin,
      position: 'relative'
    }
  },




};
