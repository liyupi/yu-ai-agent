import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                我的网站
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                我们致力于为客户提供最优质的服务和解决方案。
                通过创新的技术和专业的团队，我们帮助您的业务取得成功。
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  sx={{ color: 'white', '&:hover': { color: '#1976d2' } }}
                  aria-label="Facebook"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  sx={{ color: 'white', '&:hover': { color: '#1976d2' } }}
                  aria-label="Twitter"
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  sx={{ color: 'white', '&:hover': { color: '#1976d2' } }}
                  aria-label="Instagram"
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  sx={{ color: 'white', '&:hover': { color: '#1976d2' } }}
                  aria-label="LinkedIn"
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                快速链接
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="/" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#1976d2' } }}>
                  首页
                </Link>
                <Link href="/about" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#1976d2' } }}>
                  关于我们
                </Link>
                <Link href="/services" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#1976d2' } }}>
                  服务
                </Link>
                <Link href="/contact" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#1976d2' } }}>
                  联系我们
                </Link>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                联系信息
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Email sx={{ fontSize: 20, opacity: 0.8 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    info@mywebsite.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Phone sx={{ fontSize: 20, opacity: 0.8 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    +86 123 4567 8900
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOn sx={{ fontSize: 20, opacity: 0.8 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    北京市朝阳区某某街道123号
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            © {currentYear} 我的网站. 保留所有权利.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;