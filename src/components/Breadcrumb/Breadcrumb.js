// react
import React from 'react';
// redux
import { useSelector } from 'react-redux';

// router
import { Link } from 'react-router-dom';

// lodash
import get from 'lodash/get';

// material
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// icons
import { NavigateNext as IconNavigateNext } from '@material-ui/icons';

// styles
import useStyles from './Breadcrumb.styles';
import { breadcrumbLabels as labels, breadcrumbExclude as exclude } from '../../utils/utils';
import EndtDetails from '../../pages/EndorsementPage/EndtDetails';

const Breadcrumb = () => {
  // hooks
  const pathName = useSelector(state => get(state, 'router.location.pathname'));
  const classes = useStyles();

  // vars
  const breadcrumbLabels = labels;
  const breadcrumbExclude = exclude;
  const pathArray = pathName.split('/');

  // remove first empty item
  pathArray.shift();

  // filter out excluded path segments
  const pathArrayFiltered = pathArray.filter(segment => {
    if (!breadcrumbExclude.includes(segment)) {
      return segment;
    }
    return false;
  });

  const renderBreadCrumbs = () => {
    return pathArrayFiltered.map((segment, key) => {
      const typographyProps = {
        component: 'span',
        variant: 'h6',
      };
      const segmentIndex = pathArray.indexOf(segment);

      let crumbClassName = classes.crumbText;
      let text = segment.replace(/-/g, ' ').replace(/_/g, ' ');
      let url = '';

      // check if override text
      if (breadcrumbLabels[segment]) {
        text = breadcrumbLabels[segment];
      }

      // last item
      if (key === pathArrayFiltered.length - 1) {
        typographyProps.component = 'h6';
        crumbClassName += ` ${classes.crumbTextActive}`;
      }

      // construct url
      for (let c = 0; c <= segmentIndex; c++) {
        url += `/${pathArray[c]}`;
      }

      return (
        <Link className={classes.crumbLink} key={key} to={url} data-cy={`${segment}-breadcrumb`}>
          <Typography
            className={crumbClassName}
            data-cy={`current-path-${segment}`}
            {...typographyProps}
          >
            {text}
          </Typography>
        </Link>
      );
    });
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Breadcrumbs
          separator={<IconNavigateNext color="primary" fontSize="small" />}
          arial-label="Breadcrumb"
        >
          {renderBreadCrumbs()}

        </Breadcrumbs>
      </Container>
    </div>
  );
};

export default Breadcrumb;
