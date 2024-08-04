import { Pipe, PipeTransform } from '@angular/core';
import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { enUS, fr, es } from 'date-fns/locale';

type LocaleKey = 'en-US' | 'fr-FR' | 'es-ES';

@Pipe({
  name: 'customDateFormatter',
  standalone: true,
})
export class CustomDateFormatterPipe implements PipeTransform {
  transform(
    value: string | Date,
    formatString: string = 'dd-MM-yyyy HH:mm:ss',
    timeZone: string = 'local',
    relative: boolean = false,
    locale: LocaleKey = 'en-US'
  ): string {
    let date: Date;

    if (typeof value === 'string') {
      date = parseISO(value);
    } else {
      date = value;
    }

    const locales: Record<LocaleKey, any> = {
      'en-US': enUS,
      'fr-FR': fr,
      'es-ES': es,
    };
    const selectedLocale = locales[locale];

    if (relative) {
      return formatDistanceToNow(date, {
        addSuffix: true,
        locale: selectedLocale,
      });
    }

    if (timeZone === 'UTC') {
      return format(date, formatString, { locale: selectedLocale });
    }

    return format(date, formatString, { locale: selectedLocale });
  }
}
