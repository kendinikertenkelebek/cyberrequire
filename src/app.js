'use strict';

function CyberRequest(path, alternativePath = null) {
  try {
    const x = require(path);
    return x;
  } catch (e) {
    if (e) {
      try {
        const x = require(`${process.cwd()}/${path}`);
        return x;
      } catch (err) {
        if (alternativePath) {
          return CyberRetry(alternativePath);
        }
        return null;
      }
    }
  }
}

function CyberRetry(alternativePath) {
  try {
    const x = require(alternativePath);
    return x;
  } catch (e) {
    if (e) {
      try {
        const x = require(`${process.cwd()}/${alternativePath}`);
        return x;
      } catch (err) {
        if (err) {
          return null;
        }
      }
    }
  }
}

module.exports = CyberRequest;
