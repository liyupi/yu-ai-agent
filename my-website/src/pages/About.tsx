import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Paper,
  useTheme,
} from '@mui/material';
import {
  Business,
  People,
  EmojiEvents,
  Lightbulb,
  Handshake,
  TrendingUp,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const theme = useTheme();

  const values = [
    {
      icon: <Lightbulb sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: '创新',
      description: '我们不断探索新技术，为客户提供创新的解决方案。',
    },
    {
      icon: <Handshake sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: '诚信',
      description: '以诚信为本，与客户建立长期稳定的合作关系。',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: '卓越',
      description: '追求卓越品质，为客户创造最大价值。',
    },
  ];

  const team = [
    {
      name: '张三',
      position: '首席执行官',
      avatar: 'https://via.placeholder.com/150',
      description: '拥有15年行业经验，专注于企业数字化转型。',
    },
    {
      name: '李四',
      position: '技术总监',
      avatar: 'https://via.placeholder.com/150',
      description: '技术专家，负责产品研发和技术创新。',
    },
    {
      name: '王五',
      position: '设计总监',
      avatar: 'https://via.placeholder.com/150',
      description: '用户体验专家，致力于创造优秀的用户界面。',
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
              关于我们
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{ opacity: 0.9, maxWidth: 800, mx: 'auto' }}
            >
              我们是一家专注于数字化转型的科技公司，
              致力于为客户提供最优质的技术解决方案。
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Company Story */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                我们的故事
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
                成立于2020年，我们从一个小的创业团队开始，
                经过几年的发展，已经成为行业内备受认可的技术服务提供商。
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
                我们相信技术的力量可以改变世界，通过创新的解决方案，
                我们帮助客户实现业务增长，提升运营效率。
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                我们的使命是通过技术驱动创新，为客户创造更大的价值，
                成为他们最值得信赖的技术合作伙伴。
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 400,
                  backgroundColor: '#f5f5f5',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Business sx={{ fontSize: 120, color: theme.palette.primary.main }} />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Values */}
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
              我们的价值观
            </Typography>
          </motion.div>
          
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 3,
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows[8],
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent>
                      <Box sx={{ mb: 2 }}>{value.icon}</Box>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {value.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
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
            我们的团队
          </Typography>
        </motion.div>
        
        <Grid container spacing={4}>
          {team.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent>
                    <Avatar
                      src={member.avatar}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        mb: 2,
                        fontSize: '3rem',
                      }}
                    />
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {member.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="primary"
                      gutterBottom
                      sx={{ fontWeight: 'bold' }}
                    >
                      {member.position}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats */}
      <Box sx={{ backgroundColor: '#1a1a1a', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#ffd700' }}>
                    3+
                  </Typography>
                  <Typography variant="h6">年行业经验</Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={3}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#ffd700' }}>
                    50+
                  </Typography>
                  <Typography variant="h6">专业团队</Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={3}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#ffd700' }}>
                    200+
                  </Typography>
                  <Typography variant="h6">成功项目</Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={3}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#ffd700' }}>
                    98%
                  </Typography>
                  <Typography variant="h6">客户满意度</Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;