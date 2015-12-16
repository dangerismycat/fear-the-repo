const _ = require('underscore');

export function checkUser(req, res, next) {
  if (!isLoggedIn(req)) {
    res.send({Auth: false});
  } else {
    res.send({Auth: true});
  }
};

export function createSession(req, res, newUser) {
  return req.session.regenerate( () => {
      req.session.user = newUser;
      res.send({id: newUser.id, resumeId: newUser.resumeId});
    });
};

function isLoggedIn(req) {
  return req.session ? !!req.session.user : false;
};

export function serverResponseToNewResumeState(serverResponse) {
  let newResumeState = {};

  if (serverResponse[0]) {
      newResumeState.resumeId = serverResponse[0].resumeId;
      newResumeState.resumeTitle = serverResponse[0].resumeTitle;
      newResumeState.resumeTheme = serverResponse[0].resumeTheme;
      newResumeState.serverIsSaving = 'no';

      newResumeState.resumeHeader = {
        name: serverResponse[0].name,
        profession: serverResponse[0].profession,
        city: serverResponse[0].city,
        state: serverResponse[0].state,
        displayEmail: serverResponse[0].displayEmail,
        phone: serverResponse[0].phone,
        webLinkedin: serverResponse[0].webLinkedin,
        webOther: serverResponse[0].webOther
      },

      // newResumeState.resumeFooter = { // front end refactor, these not currently needed
      //   school1: {
      //     name: serverResponse[0].school1Name,
      //     degree: serverResponse[0].school1Degree,
      //     schoolEndYear: serverResponse[0].school1EndYear,
      //     location: serverResponse[0].school1Location
      //   },
      //   school2: {
      //     name: serverResponse[0].school2Name,
      //     degree: serverResponse[0].school2Degree,
      //     schoolEndYear: serverResponse[0].school2EndYear,
      //     location: serverResponse[0].school2Location
      //   },
      //   personalStatement: serverResponse[0].personalStatement
      // }
  }

  newResumeState.blockChildrenTempObj = {};
  serverResponse.forEach( (bullet) => {
    // check to see if the block is in the blockChildren OBJ yet.
    if (!newResumeState.blockChildrenTempObj[bullet.blockPosition]) {
      newResumeState.blockChildrenTempObj[bullet.blockPosition] = {
        blockId: bullet.blockId,
        blockType: bullet.blockType,
        companyName: bullet.companyName,
        jobTitle: bullet.jobTitle,
        years: bullet.years,
        location: bullet.location,
        bulletChildrenTempObj: {},
        blockPosition: bullet.blockPosition,
        archived: bullet.blockArchived
      };
    }

    newResumeState.blockChildrenTempObj[bullet.blockPosition].bulletChildrenTempObj[bullet.bulletPosition] = {
      text: bullet.bullet, // best line ever
      archived: bullet.bulletArchived
    };
  });

  newResumeState.blockChildren = [];

  _.each(newResumeState.blockChildrenTempObj, (key) => {
    newResumeState.blockChildren[key] = newResumeState.blockChildrenTempObj[key]
  });
  delete newResumeState.blockChildrenTempObj;

  newResumeState.blockChildren.forEach( (blockChild) => {
    blockChild.bulletChildren = [];

    _.each(blockChild.bulletChildrenTempObj, (key) => {
      blockChild.bulletChildren[key] = blockChild.bulletChildrenTempObj[key]
    });
    delete blockChild.bulletChildrenTempObj;
  })

  return newResumeState;
};
