import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PsAppBlogModule } from './blog/blog.module';
import { PsAppEntryModule } from './entry/entry.module';
import { PsAppTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        PsAppBlogModule,
        PsAppEntryModule,
        PsAppTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PsAppEntityModule {}
