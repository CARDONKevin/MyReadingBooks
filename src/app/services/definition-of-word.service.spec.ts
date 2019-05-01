import {inject, TestBed} from '@angular/core/testing';

import { DefinitionOfWordService } from './definition-of-word.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

let wordApiDef: any;
describe('DefinitionOfWordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    wordApiDef = {
      batchcomplete: '',
      warnings: {
        extracts: {
          '*': '"exlimit" was too large for a whole article extracts request, lowered to 1.\nHTML may be malformed' +
            ' and/or unbalanced and may omit inline images. Use at your own risk. Known problems are listed at' +
            ' https://www.mediawiki.org/wiki/Extension:TextExtracts#Caveats.'
        }
      },
      query: {
        normalized: [
          {
            from: 'string',
            to: 'String'
          }
        ],
        pages: {
          44075: {
            pageid: 44075,
            ns: 0,
            title: 'String',
            extract: '<p><i><b>String</b></i> est un mot anglais qui signifie litt\u00e9ralement ficelle ' +
              'ou corde\u00a0:\n</p>\n<ul><li>en lingerie, un <b>string</b> est un type de sous-v\u00eatement.' +
              '</li>\n<li>en informatique, le terme <b>string</b> est un synonyme de cha\u00eene de caract\u00e8res.' +
              '</li>\n<li>en \u00e9lectricit\u00e9, un <b>string</b> est une cha\u00eene de modules solaires ' +
              'photovolta\u00efques.</li></ul>'
          }
        }
      }
    };
  });

  it('should return definition of word', inject([DefinitionOfWordService, HttpClient],
    (service: DefinitionOfWordService, http: HttpClient) => {

      spyOn(http, 'get').and.returnValue(of(wordApiDef));

      // when
      service.getDefinitionWord('test').subscribe(
        response => {
          expect(response).toEqual(wordApiDef);

        });
    }));
});
