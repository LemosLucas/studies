"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var stores, connection, close, ConnectionFactory;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      stores = ['negociacoes'];
      connection = null;
      close = null;

      _export("ConnectionFactory", ConnectionFactory =
      /*#__PURE__*/
      function () {
        function ConnectionFactory() {
          _classCallCheck(this, ConnectionFactory);

          throw new Error('Não é possível criar instâncias dessa classe');
        }

        _createClass(ConnectionFactory, null, [{
          key: "getConnection",
          value: function getConnection() {
            return new Promise(function (resolve, reject) {
              if (connection) return resolve(connection);
              var openRequest = indexedDB.open('jscangaceiro', 2);

              openRequest.onupgradeneeded = function (e) {
                ConnectionFactory._createStores(e.target.result);
              };

              openRequest.onsuccess = function (e) {
                connection = e.target.result;
                close = connection.close.bind(connection);

                connection.close = function () {
                  throw new Error('Você não pode fechar diretamente a conexão');
                };

                resolve(e.target.result);
              };

              openRequest.onerror = function (e) {
                console.log(e.target.error);
                reject(e.target.error.name);
              };
            });
          }
        }, {
          key: "_createStores",
          value: function _createStores(connection) {
            stores.forEach(function (store) {
              if (connection.objectStoreNames.contains(store)) connection.deleteObjectStore(store);
              connection.createObjectStore(store, {
                autoIncrement: true
              });
            });
          }
        }, {
          key: "closeConnection",
          value: function closeConnection() {
            if (connection) {
              close();
            }
          }
        }]);

        return ConnectionFactory;
      }());
    }
  };
});
//# sourceMappingURL=ConnectionFactory.js.map