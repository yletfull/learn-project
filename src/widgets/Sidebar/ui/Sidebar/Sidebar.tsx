import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Avatar,
  Box,
  Button,
  Drawer, IconButton,
  Link,
  styled,
  Typography,
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { alpha } from '@mui/material/styles';
import useResponsive from 'app/providers/ThemeProvider/model/useResponsive';
import LangSwitcher from 'widgets/LangSwitcher';
import { Query } from 'shared/types/theme';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { NAV_WIDTH } from './constants';

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

const Sidebar:FC = (props) => {
  const { t } = useTranslation();
  const isDesktop = useResponsive(Query.Up, 'lg');
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleToggle = () => setIsCollapsed((prev) => !prev);

  const renderContent = (
    <Box>
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        {t('Меню')}
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar
              src="https://avatars.dzeninfra.ru/get-zen_doc/3993525/pub_5f85a78b01c3532acc3e0944_
              5f85a7a53940476c666415ca/scale_1200"
              alt="photoURL"
            />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                displayName
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                role
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 10,
          left: 20,
          width: 'calc(100% - 40px)',
        }}
      >
        <LangSwitcher />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          top: 20,
          right: 20,
        }}
      >
        <Button
          aria-label={t('Свернуть')}
          size="small"
          onClick={handleToggle}
          startIcon={<KeyboardArrowLeftIcon />}
        >
          {t('Свернуть')}
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {!isCollapsed && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'fixed',
            top: 150,
            left: -20,
          }}
        >
          <Button
            onClick={handleToggle}
            variant="outlined"
            color="secondary"
            endIcon={<KeyboardArrowRightIcon />}
          />
        </Box>
      )}
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={isCollapsed}
          onClose={handleToggle}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
