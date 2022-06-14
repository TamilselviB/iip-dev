import Insurance from '../pages/Insurance/Insurance';
import moment from 'moment';
import S3 from 'react-aws-s3';
import { config } from '../Services/Config';

export const formatDate = dateString => {
  const [date, time] = dateString.split('T');

  return `${date} ${time.split('.')[0]}`;
};

export const totalExposure = data => {
  const array = data.filter(result => result.isPolicyLevel === false);
  const res = Array.from(
    array.reduce(
      (m, { coverName, sumAssured }) => m.set(coverName, (m.get(coverName) || 0) + sumAssured),
      new Map(),
    ),
    ([coverName, sumAssured]) => ({ coverName, sumAssured }),
  );
  const newArray = data.filter(result => result.isPolicyLevel === true);
  const arr = Array.from(
    newArray.reduce((m, { coverName, sumAssured }) => m.set(coverName, sumAssured), new Map()),
    ([coverName, sumAssured]) => ({ coverName, sumAssured }),
  );
  res.push.apply(res, arr);
  return res;
};

export const DateFormatLabel = value => {
  var dateString = moment(value).format('DD/MM/YYYY HH:MM:SS');
  return dateString;
};

export const DDMMYY = value => {
  var dateString = moment(value).format('DD/MM/YYYY');
  return dateString;
};

export const dateStringFormat = value => {
  var dateString = moment(value).format('DD/MM/YYYY HH:MM:SS');
  return dateString;
};

export const numberFormatUSFormat = value => {
  if (Number.isNaN(value)) {
    return '';
  }
  return new Intl.NumberFormat('en-GB', {}).format(value);
};

/**
 * Format a date using the Internationalization DateTimeFormat API.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat#Parameters|DateTimeFormat options}
 *
 * @param {string|Date} date - The date to format.
 * @param {object} [options] - `Intl.DateTimeFormat` options.
 * @returns {Intl.DateTimeFormat} - Formatted date.
 */
export const formatDateIntl = (
  date,
  options = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'UTC',
  },
) => (date ? new Intl.DateTimeFormat(navigator.language, options).format(new Date(date)) : '');

/**
 * Format a number to currency
 * @param {number} number
 * @param {string} currency - The currency code according to ISO 4217
 */
export const formatCurrency = (number, currency = 'AED') =>
  new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency,
  }).format(number);

export const pxToRem = num => {
  return `${(1 / 16) * num}rem`;
};

export const captilalizeWord = word => {
  return word[0].toUpperCase() + word.substring(1);
};

export const spacing = factor => `${0.5 * factor}rem`;

export const types = ['Inclusion', 'Exclusion', 'Warranty', 'Subjectivity'];

export const nameRisk = ['Governate', 'Street', 'Block', 'Area', 'City', 'Country', 'Geocode'];

export const propertyInfo = [
  'Occupancy',
  'Construction Type',
  'Year Built',
  'No of Floors',
  'Location Description',
];

export const breadcrumbLabels = ['Customer'];

export const breadcrumbExclude = [''];

export const bulkUpload = async filesArray => {
  console.log('----->json', JSON.stringify(filesArray));
  const ReactS3Client = new S3(config);
  const files = [];
  if (filesArray) {
    for (let i = 0; i < filesArray.length; i++) {
      await ReactS3Client.uploadFile(filesArray[i].file, filesArray[i].file?.name)
        .then(data => {
          files.push({
            name: filesArray[i].file?.name,
            location: data.location,
          });
        })
        .catch(err => {
          throw err;
        });
    }
  }
  return files;
};
