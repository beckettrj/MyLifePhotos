# Contributing to MyLifePictures.ai

Thank you for your interest in contributing to MyLifePictures.ai! This project aims to improve the lives of elderly users through compassionate AI technology.

## 🎯 Project Mission

MyLifePictures.ai is designed specifically for elderly users in care facilities, focusing on:
- **Accessibility**: WCAG AAA compliance with elderly-specific optimizations
- **Simplicity**: Intuitive interfaces that don't overwhelm
- **Safety**: Emergency detection and caregiver notifications
- **Connection**: Bridging families through shared memories

## 🤝 How to Contribute

### 1. Code Contributions

#### Getting Started
```bash
# Fork the repository
git clone https://github.com/beckettrj/MyLifePictures.git
cd MyLifePictures

# Install dependencies
npm install

# Start development server
npm run dev
```

#### Development Guidelines
- **TypeScript**: All new code must be TypeScript with strict typing
- **Accessibility**: Every UI component must be keyboard navigable and screen reader compatible
- **Testing**: Include unit tests for new functionality
- **Documentation**: Update relevant documentation for new features

#### Code Style
- Use ESLint and Prettier configurations provided
- Follow React hooks best practices
- Maintain consistent naming conventions
- Add JSDoc comments for complex functions

### 2. Accessibility Contributions

We prioritize accessibility for elderly users:

#### Design Requirements
- **Font Size**: Minimum 18px, prefer 20px+ for primary content
- **Touch Targets**: Minimum 44px for all interactive elements
- **Color Contrast**: WCAG AAA compliance (7:1 ratio)
- **Motion**: Respect `prefers-reduced-motion` settings

#### Testing Checklist
- [ ] Screen reader compatibility (NVDA, JAWS, VoiceOver)
- [ ] Keyboard navigation without mouse
- [ ] High contrast mode functionality
- [ ] Voice command integration
- [ ] Large font mode readability

### 3. AI & Voice Contributions

#### AI Provider Integration
- Support for multiple LLM providers (OpenAI, Anthropic, Gemini)
- Graceful fallback between providers
- Context-aware responses for elderly users
- Safety filtering for inappropriate content

#### Voice Command Enhancement
- Natural language processing improvements
- Emergency keyword detection
- Multi-language support planning
- Noise reduction and clarity improvements

### 4. Documentation Contributions

Help improve our documentation:
- Setup guides for families and caregivers
- Troubleshooting common issues
- API documentation for developers
- Accessibility best practices

## 🐛 Bug Reports

### Before Submitting
1. Check existing issues for duplicates
2. Test with the latest version
3. Verify the issue affects elderly users specifically

### Bug Report Template
```markdown
**Describe the bug**
A clear description of what the bug is.

**Impact on elderly users**
How does this affect the target user experience?

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
- OS: [e.g. iOS]
- Browser [e.g. chrome, safari]
- Version [e.g. 22]
- Device [e.g. tablet, desktop]

**Accessibility context**
- Screen reader used (if any)
- Font size setting
- High contrast mode enabled
- Voice commands attempted
```

## 💡 Feature Requests

### Feature Request Template
```markdown
**Is your feature request related to a problem for elderly users?**
A clear description of what the problem is.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Accessibility considerations**
How will this feature work for users with:
- Vision impairments
- Hearing impairments
- Motor skill limitations
- Cognitive considerations

**Describe alternatives you've considered**
Other solutions you've thought about.

**Additional context**
Add any other context or screenshots about the feature request.
```

## 🎨 Design Contributions

### Design Principles
1. **Simplicity First**: Reduce cognitive load
2. **Large and Clear**: Everything should be easily visible
3. **Consistent**: Predictable layouts and interactions
4. **Forgiving**: Easy to undo mistakes
5. **Calming**: Avoid overwhelming colors or animations

### Design Assets
- Use Figma for design mockups
- Follow the established color palette
- Maintain 8px spacing grid
- Include dark mode variants
- Consider night mode for evening use

## 🧪 Testing Guidelines

### Manual Testing
- Test with actual elderly users when possible
- Use assistive technologies during testing
- Test in various lighting conditions
- Verify voice commands work with background noise

### Automated Testing
```bash
# Run all tests
npm run test

# Run accessibility tests
npm run test:a11y

# Run integration tests
npm run test:integration

# Type checking
npm run type-check
```

## 📝 Pull Request Process

### Before Submitting
1. Ensure all tests pass
2. Update documentation if needed
3. Test accessibility compliance
4. Verify voice commands work
5. Check mobile responsiveness

### PR Template
```markdown
**Description**
Brief description of changes and why they're needed.

**Type of change**
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Accessibility improvement

**Elderly user impact**
How do these changes improve the experience for elderly users?

**Testing**
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Accessibility tests pass
- [ ] Manual testing with voice commands
- [ ] Tested with screen reader
- [ ] Tested in high contrast mode

**Screenshots**
If applicable, add screenshots showing the changes.

**Checklist**
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- Special recognition for accessibility improvements
- Hackathon presentation credits

## 📞 Getting Help

### Community Support
- **GitHub Discussions**: For questions and general discussion
- **GitHub Issues**: For bug reports and feature requests
- **Email**: support@mylifepictures.ai for sensitive issues

### Development Help
- **Documentation**: Check `/docs` folder first
- **Code Examples**: See existing components for patterns
- **Architecture**: Review the technical documentation

## 🌟 Special Considerations

### Elderly User Focus
Remember that our primary users are elderly individuals who may have:
- Limited technology experience
- Vision or hearing impairments
- Reduced motor skills
- Memory challenges
- Preference for simple, predictable interfaces

Every contribution should consider these factors and prioritize user dignity and independence.

### Family and Caregiver Experience
Secondary users (family members and caregivers) need:
- Easy setup and configuration
- Clear monitoring and notification systems
- Simple photo upload and organization
- Peace of mind about their loved one's experience

---

**Thank you for helping make technology more accessible and compassionate for elderly users! 💙**