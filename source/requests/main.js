const request = require('request-promise');
const querystring = require('querystring');
const contextService = require('request-context');

const OTHER_SITE = 'test/';

function RequestsBuilder() {

  this.createOption = (name, query) => {
    let url = OTHER_SITE + name;
    if(query) {
      url = url + '?' + query;
    }

    var options = {
      url: url,
      headers: {
        Authorization: contextService.get('request:token')
      },
      json: true
    };

    return options;
  };

  this.postExample = async (info, error) => {
    var options = {
      method: 'POST',
      uri: OTHER_SITE + 'somePost',
      body: {
        info
      },
      headers: {
        Authorization: contextService.get('request:token')
      },
      json: true
    };

    request(options).then(() => {}).catch(err => { console.log(err) });
  };

  this.optionsUseExample = async (id) => {
    try {
      const query = querystring.stringify({ id });
      const nameAPI = 'api/superMethod';
      const options = this.createOption(nameAPI, query);
      const res = await request(options);
      return res;
    } catch (err) {
      return null;
    }
  }
}
module.exports = new RequestsBuilder();