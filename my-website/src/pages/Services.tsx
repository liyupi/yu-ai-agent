import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  useTheme,
} from '@mui/material';
import {
  Web,
  MobileFriendly,
  Cloud,
  Security,
  Analytics,
  Support,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const Services: React.FC = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <Web sx={{ fontSize: 60, color: theme.palette.primary.main }} />,
      title: '网站开发',
      description: '专业的网站开发服务，包括企业官网、电商平台、管理系统等。',
      features: ['响应式设计', 'SEO优化', '性能优化', '安全防护'],
      price: '¥5,000起',
    },
    {
      icon: <MobileFriendly sx={{ fontSize: 60, color: theme.palette.primary.main }} />,
      title: '移动应用开发',
      description: 'iOS和Android应用开发，为用户提供优秀的移动体验。',
      features: ['原生开发', '跨平台开发', 'UI/UX设计', '应用商店发布'],
      price: '¥10,000起',
    },
    {
      icon: <Cloud sx={{ fontSize: 60, color: theme.palette.primary.main }} />,
      title: '云服务解决方案',
      description: '云计算服务，帮助企业实现数字化转型和业务扩展。',
      features: ['云架构设计', '数据迁移', '自动化部署', '监控运维'],
      price: '¥8,000起',
    },
    {
      icon: <Security sx={{ fontSize: 60, color: theme.palette.primary.main }} />,
      title: '网络安全服务',
      description: '全面的网络安全解决方案，保护企业数据和系统安全。',
      features: ['安全评估', '漏洞修复', '安全培训', '应急响应'],
      price: '¥6,000起',
    },
    {
      icon: <Analytics sx={{ fontSize: 60, color: theme.palette.primary.main }} />,
      title: '数据分析服务',
      description: '大数据分析和商业智能，帮助企业做出数据驱动的决策。',
      features: ['数据收集', '数据清洗', '可视化分析', '预测模型'],
      price: '¥7,000起',
    },
    {
      icon: <Support sx={{ fontSize: 60, color: theme.palette.primary.main }} />,
      title: '技术支持服务',
      description: '7x24小时技术支持，确保系统稳定运行和问题快速解决。',
      features: ['远程支持', '现场服务', '定期维护', '培训服务'],
      price: '¥3,000起',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{ fontWeight: 'bold', mb: 3 }}
            >
              我们的服务
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{ opacity: 0.9, maxWidth: 800, mx: 'auto' }}
            >
              提供全方位的技术解决方案，助力企业数字化转型
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                    <Box sx={{ mb: 3 }}>{service.icon}</Box>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                      {service.description}
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      {service.features.map((feature, featureIndex) => (
                        <Chip
                          key={featureIndex}
                          label={feature}
                          size="small"
                          sx={{
                            m: 0.5,
                            backgroundColor: theme.palette.primary.light,
                            color: 'white',
                          }}
                        />
                      ))}
                    </Box>
                    
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ fontWeight: 'bold', mb: 2 }}
                    >
                      {service.price}
                    </Typography>
                    
                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="contained"
                      fullWidth
                      sx={{ mt: 'auto' }}
                    >
                      了解更多
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Process Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{ fontWeight: 'bold', mb: 6 }}
            >
              我们的工作流程
            </Typography>
          </motion.div>
          
          <Grid container spacing={4}>
            {[
              {
                step: '01',
                title: '需求分析',
                description: '深入了解客户需求，制定详细的项目计划和技术方案。',
              },
              {
                step: '02',
                title: '设计开发',
                description: '专业的UI/UX设计，高质量的代码开发，确保项目质量。',
              },
              {
                step: '03',
                title: '测试部署',
                description: '全面的测试流程，确保系统稳定性和用户体验。',
              },
              {
                step: '04',
                title: '维护支持',
                description: '持续的技术支持和维护服务，保障系统长期稳定运行。',
              },
            ].map((process, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ textAlign: 'center', p: 3 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {process.step}
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {process.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {process.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: 'center',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: 4,
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              需要定制化解决方案？
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              我们的专业团队将为您提供最适合的技术方案
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#ffd700',
                color: '#333',
                '&:hover': { backgroundColor: '#ffed4e' },
              }}
            >
              免费咨询
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;