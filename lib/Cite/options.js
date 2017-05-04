'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
  * Change the default options of a `Cite` object.
  * 
  * @method options
  * @memberof Cite
  * @this Cite
  * 
  * @param {Object} options - The options for the output
  * @param {String} [options.format="real"] - The outputted datatype. Real representation (`"real"`, e.g. DOM Object for HTML, JavaScript Object for JSON) or String representation ( `"string"` )
  * @param {String} [options.type="json"] - The format of the output. `"string"`, `"html"` or `"json"`
  * @param {String} [options.style="csl"] - The style of the output. See [Output](./#output)
  * @param {String} [options.lang="en-US"] - The language of the output. [RFC 5646](https://tools.ietf.org/html/rfc5646) codes
  * @param {Boolean} nolog - Hide this call from the log (i.e. when used internally)
  * 
  * @return {Cite} The updated parent object
  */
var options = function options(_options, nolog) {
  if (!nolog) this._log.push({ name: 'options', version: this.currentVersion() + 1, arguments: [_options] });

  Object.assign(this._options, _options);

  return this;
};

exports.options = options;