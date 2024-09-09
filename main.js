// // Utility function to convert image file to Base64 string
// const fileToBase64 = (file: File): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve(reader.result as string);
//         reader.onerror = reject;
//         reader.readAsDataURL(file);
//     });
// };
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// // Function to clear all input fields
// const clearInputFields = () => {
//     const inputs = document.querySelectorAll('input, textarea') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;
//     inputs.forEach(input => {
//         if (input.type === 'file') {
//             (input as HTMLInputElement).value = ''; // Clear file input
//         } else {
//             input.value = ''; // Clear text input
//         }
//     });
// };
// // Function to populate input fields with existing data
// const populateInputFields = (data: any) => {
//     const nameInput = document.getElementById('name') as HTMLInputElement | null;
//     const emailInput = document.getElementById('email') as HTMLInputElement | null;
//     const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
//     const addressInput = document.getElementById('address') as HTMLTextAreaElement | null;
//     const institutionInput = document.getElementById('institution') as HTMLInputElement | null;
//     const degreeInput = document.getElementById('degree') as HTMLInputElement | null;
//     const graduationDateInput = document.getElementById('graduation-date') as HTMLInputElement | null;
//     const skillsInput = document.getElementById('skills') as HTMLTextAreaElement | null;
//     const companyInput = document.getElementById('company') as HTMLInputElement | null;
//     const positionInput = document.getElementById('position') as HTMLInputElement | null;
//     const startDateInput = document.getElementById('start-date') as HTMLInputElement | null;
//     const endDateInput = document.getElementById('end-date') as HTMLInputElement | null;
//     const responsibilitiesInput = document.getElementById('responsibilities') as HTMLTextAreaElement | null;
//     const aboutInput = document.getElementById('about-me') as HTMLTextAreaElement | null;
//     const photoInput = document.getElementById('photo') as HTMLInputElement | null;
//     if (data) {
//         if (nameInput) nameInput.value = data.name || '';
//         if (emailInput) emailInput.value = data.email || '';
//         if (phoneInput) phoneInput.value = data.phone || '';
//         if (addressInput) addressInput.value = data.address || '';
//         if (institutionInput) institutionInput.value = data.institution || '';
//         if (degreeInput) degreeInput.value = data.degree || '';
//         if (graduationDateInput) graduationDateInput.value = data.graduationDate || '';
//         if (skillsInput) skillsInput.value = data.skills || '';
//         if (companyInput) companyInput.value = data.company || '';
//         if (positionInput) positionInput.value = data.position || '';
//         if (startDateInput) startDateInput.value = data.startDate || '';
//         if (endDateInput) endDateInput.value = data.endDate || '';
//         if (responsibilitiesInput) responsibilitiesInput.value = data.responsibilities || '';
//         if (aboutInput) aboutInput.value = data.about || '';
//         // Set the photo if available
//         if (data.photoBase64 && photoInput) {
//             const img = document.createElement('img');
//             img.src = data.photoBase64;
//             img.alt = 'Photo';
//             img.style.width = '150px';
//             img.style.height = '150px';
//             img.style.borderRadius = '50%';
//             img.style.objectFit = 'cover';
//             photoInput.parentElement?.insertAdjacentElement('beforeend', img);
//         }
//     }
// };
// // Function to generate resume HTML
// const generateResumeHTML = async (): Promise<string> => {
//     const nameInput = document.getElementById('name') as HTMLInputElement | null;
//     const emailInput = document.getElementById('email') as HTMLInputElement | null;
//     const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
//     const addressInput = document.getElementById('address') as HTMLTextAreaElement | null;
//     const institutionInput = document.getElementById('institution') as HTMLInputElement | null;
//     const degreeInput = document.getElementById('degree') as HTMLInputElement | null;
//     const graduationDateInput = document.getElementById('graduation-date') as HTMLInputElement | null;
//     const skillsInput = document.getElementById('skills') as HTMLTextAreaElement | null;
//     const companyInput = document.getElementById('company') as HTMLInputElement | null;
//     const positionInput = document.getElementById('position') as HTMLInputElement | null;
//     const startDateInput = document.getElementById('start-date') as HTMLInputElement | null;
//     const endDateInput = document.getElementById('end-date') as HTMLInputElement | null;
//     const responsibilitiesInput = document.getElementById('responsibilities') as HTMLTextAreaElement | null;
//     const aboutInput = document.getElementById('about-me') as HTMLTextAreaElement | null;
//     const photoInput = document.getElementById('photo') as HTMLInputElement | null;
//     // Basic validation
//     if (!nameInput || !emailInput || !phoneInput || !addressInput ||
//         !institutionInput || !degreeInput || !graduationDateInput ||
//         !skillsInput || !companyInput || !positionInput ||
//         !startDateInput || !endDateInput || !responsibilitiesInput) {
//         alert('Please ensure all required fields are present.');
//         return '';
//     }
//     const name = nameInput.value.trim();
//     const email = emailInput.value.trim();
//     const phone = phoneInput.value.trim();
//     const address = addressInput.value.trim();
//     const photoBase64 = photoInput && photoInput.files?.[0] ? await fileToBase64(photoInput.files[0]) : '';
//     const institution = institutionInput.value.trim();
//     const degree = degreeInput.value.trim();
//     const graduationDate = graduationDateInput.value.trim();
//     const skills = skillsInput.value.trim();
//     const company = companyInput.value.trim();
//     const position = positionInput.value.trim();
//     const startDate = startDateInput.value.trim();
//     const endDate = endDateInput.value.trim();
//     const responsibilities = responsibilitiesInput.value.trim();
//     const about = aboutInput ? aboutInput.value.trim() : '';
//     // Validate if all fields are filled
//     if (!name || !email || !phone || !address || !institution ||
//         !degree || !graduationDate || !skills || !company ||
//         !position || !startDate || !endDate || !responsibilities) {
//         alert('Please fill in all required fields.');
//         return '';
//     }
//     // Validate email
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//         alert('Please enter a valid email address.');
//         return '';
//     }
//     // Validate phone number (example: basic validation for 10-digit phone numbers)
//     const phonePattern = /^\d{10}$/;  // Adjust regex pattern as needed
//     if (!phonePattern.test(phone)) {
//         alert('Please enter a valid phone number (10 digits).');
//         return '';
//     }
//     // Validate dates (simple check)
//     if (new Date(startDate) > new Date(endDate)) {
//         alert('End date cannot be before the start date.');
//         return '';
//     }
//     // Generate resume HTML
//     return `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Resume</title>
//             <style>
//                 .resume-container {
//                     width: 90%;
//                     max-width: 800px;
//                     text-align: center;
//                     margin: 0 auto;
//                     padding: 20px;
//                     box-sizing: border-box;
//                     border: 2px solid #4a0746;
//                     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//                     background-color: #f1def1;
//                 }
//                 .resume-header img {
//                     width: 150px;
//                     height: 150px;
//                     border-radius: 50%;
//                     object-fit: cover;
//                     margin-bottom: 10px;
//                 }
//                 .resume-section {
//                     margin-bottom: 20px;
//                     padding: 10px;
//                     border: 1px solid #9a8d99;
//                 }
//                 .resume-section h2 {
//                     font-size: 20px;
//                     margin-bottom: 10px;
//                 }
//             </style>
//         </head>
//         <body>
//             <div class="resume-container">
//                 <div class="resume-header">
//                     ${photoBase64 ? `<img src="${photoBase64}" alt="Photo"/>` : '<p>No photo available</p>'}
//                     <h1>${name}</h1>
//                     <p>Email: ${email}</p>
//                     <p>Phone: ${phone}</p>
//                     <p>Address: ${address}</p>
//                 </div>
//                 <div class="resume-section">
//                     <h2>Education</h2>
//                     <p><strong>Institution: ${institution}</strong></p>
//                     <p>Degree: ${degree}</p>
//                     <p>Graduation Date: ${graduationDate}</p>
//                 </div>
//                 <div class="resume-section">
//                     <h2>Skills</h2>
//                     <p>${skills}</p>
//                 </div>
//                 <div class="resume-section">
//                     <h2>Work Experience</h2>
//                     <p><strong>${company}</strong> - ${position}</p>
//                     <p>Start Date: ${startDate}</p>
//                     <p>End Date: ${endDate || 'Present'}</p>
//                     <p>Responsibilities: ${responsibilities}</p>
//                 </div>
//                 <div class="resume-section">
//                     <h2>About</h2>
//                     <p>${about}</p>
//                 </div>
//             </div>
//         </body>
//         </html>
//     `;
// };
// // Event listeners and functions
// document.addEventListener('DOMContentLoaded', () => {
//     const generateButton = document.getElementById('generate-resume') as HTMLButtonElement | null;
//     const downloadButton = document.getElementById('download-resume') as HTMLButtonElement | null;
//     const editButton = document.getElementById('edit-resume') as HTMLButtonElement | null;
//     const shareButton = document.getElementById('share-resume') as HTMLButtonElement | null;
//     const resumeOutput = document.getElementById('resume-output') as HTMLElement | null;
//     const resumeContent = document.getElementById('resume-content') as HTMLElement | null;
//     if (generateButton && downloadButton && editButton && shareButton && resumeOutput && resumeContent) {
//         let resumeData: any = {};
//         generateButton.addEventListener('click', async () => {
//             const resumeHTML = await generateResumeHTML();
//             if (resumeHTML) {
//                 resumeContent.innerHTML = resumeHTML;
//                 resumeOutput.classList.remove('hidden');
//                 downloadButton.classList.remove('hidden');
//                 editButton.classList.remove('hidden');
//                 shareButton.classList.remove('hidden');
//                 // Save the resume data for later use
//                 const nameInput = document.getElementById('name') as HTMLInputElement | null;
//                 const emailInput = document.getElementById('email') as HTMLInputElement | null;
//                 const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
//                 const addressInput = document.getElementById('address') as HTMLTextAreaElement | null;
//                 const institutionInput = document.getElementById('institution') as HTMLInputElement | null;
//                 const degreeInput = document.getElementById('degree') as HTMLInputElement | null;
//                 const graduationDateInput = document.getElementById('graduation-date') as HTMLInputElement | null;
//                 const skillsInput = document.getElementById('skills') as HTMLTextAreaElement | null;
//                 const companyInput = document.getElementById('company') as HTMLInputElement | null;
//                 const positionInput = document.getElementById('position') as HTMLInputElement | null;
//                 const startDateInput = document.getElementById('start-date') as HTMLInputElement | null;
//                 const endDateInput = document.getElementById('end-date') as HTMLInputElement | null;
//                 const responsibilitiesInput = document.getElementById('responsibilities') as HTMLTextAreaElement | null;
//                 const aboutInput = document.getElementById('about-me') as HTMLTextAreaElement | null;
//                 const photoInput = document.getElementById('photo') as HTMLInputElement | null;
//                 resumeData = {
//                     name: nameInput?.value || '',
//                     email: emailInput?.value || '',
//                     phone: phoneInput?.value || '',
//                     address: addressInput?.value || '',
//                     institution: institutionInput?.value || '',
//                     degree: degreeInput?.value || '',
//                     graduationDate: graduationDateInput?.value || '',
//                     skills: skillsInput?.value || '',
//                     company: companyInput?.value || '',
//                     position: positionInput?.value || '',
//                     startDate: startDateInput?.value || '',
//                     endDate: endDateInput?.value || '',
//                     responsibilities: responsibilitiesInput?.value || '',
//                     about: aboutInput?.value || '',
//                     photoBase64: photoInput && photoInput.files?.[0] ? await fileToBase64(photoInput.files[0]) : ''
//                 };
//                 clearInputFields();
//             }
//         });
//         downloadButton.addEventListener('click', () => {
//             if (resumeContent) {
//                 const resumeBlob = new Blob([resumeContent.innerHTML], { type: 'text/html' });
//                 const url = URL.createObjectURL(resumeBlob);
//                 const a = document.createElement('a');
//                 a.href = url;
//                 a.download = 'resume.html';
//                 a.click();
//                 URL.revokeObjectURL(url);
//             }
//         });
//         editButton.addEventListener('click', () => {
//             if (resumeOutput) {
//                 resumeOutput.classList.add('hidden');
//                 populateInputFields(resumeData);
//             }
//         });
//         shareButton.addEventListener('click', () => {
//             const resumeURL = 'https://example.com/resume.html'; // Replace with the actual URL
//             window.open(resumeURL, '_blank');
//         });
//         // Toggle skills visibility
//         const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement | null;
//         const skillsContent = document.getElementById('skills-content') as HTMLElement | null;
//         if (toggleSkillsButton && skillsContent) {
//             toggleSkillsButton.addEventListener('click', () => {
//                 if (skillsContent.classList.contains('hidden')) {
//                     skillsContent.classList.remove('hidden');
//                     toggleSkillsButton.textContent = 'Hide Skills';
//                 } else {
//                     skillsContent.classList.add('hidden');
//                     toggleSkillsButton.textContent = 'Show Skills';
//                 }
//             });
//         }
//         // Navigation toggle script
//         const navToggle = document.getElementById('nav-toggle') as HTMLButtonElement | null;
//         const navLinks = document.getElementById('nav-links') as HTMLElement | null;
//         if (navToggle && navLinks) {
//             navToggle.addEventListener('click', () => {
//                 navLinks.classList.toggle('active');
//             });
//         }
//     }
// });
// Utility function to convert image file to Base64 string
var fileToBase64 = function (file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () { return resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};
// Function to clear all input fields
var clearInputFields = function () {
    var inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(function (input) {
        if (input.type === 'file') {
            input.value = ''; // Clear file input
        }
        else {
            input.value = ''; // Clear text input
        }
    });
};
// Function to populate input fields with existing data
var populateInputFields = function (data) {
    var _a;
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var addressInput = document.getElementById('address');
    var institutionInput = document.getElementById('institution');
    var degreeInput = document.getElementById('degree');
    var graduationDateInput = document.getElementById('graduation-date');
    var skillsInput = document.getElementById('skills');
    var companyInput = document.getElementById('company');
    var positionInput = document.getElementById('position');
    var startDateInput = document.getElementById('start-date');
    var endDateInput = document.getElementById('end-date');
    var responsibilitiesInput = document.getElementById('responsibilities');
    var aboutInput = document.getElementById('about-me');
    var photoInput = document.getElementById('photo');
    if (data) {
        if (nameInput)
            nameInput.value = data.name || '';
        if (emailInput)
            emailInput.value = data.email || '';
        if (phoneInput)
            phoneInput.value = data.phone || '';
        if (addressInput)
            addressInput.value = data.address || '';
        if (institutionInput)
            institutionInput.value = data.institution || '';
        if (degreeInput)
            degreeInput.value = data.degree || '';
        if (graduationDateInput)
            graduationDateInput.value = data.graduationDate || '';
        if (skillsInput)
            skillsInput.value = data.skills || '';
        if (companyInput)
            companyInput.value = data.company || '';
        if (positionInput)
            positionInput.value = data.position || '';
        if (startDateInput)
            startDateInput.value = data.startDate || '';
        if (endDateInput)
            endDateInput.value = data.endDate || '';
        if (responsibilitiesInput)
            responsibilitiesInput.value = data.responsibilities || '';
        if (aboutInput)
            aboutInput.value = data.about || '';
        // Set the photo if available
        if (data.photoBase64 && photoInput) {
            var img = document.createElement('img');
            img.src = data.photoBase64;
            img.alt = 'Photo';
            img.style.width = '150px';
            img.style.height = '150px';
            img.style.borderRadius = '50%';
            img.style.objectFit = 'cover';
            (_a = photoInput.parentElement) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('beforeend', img);
        }
    }
};
// Function to generate resume HTML
var generateResumeHTML = function () { return __awaiter(_this, void 0, void 0, function () {
    var nameInput, emailInput, phoneInput, addressInput, institutionInput, degreeInput, graduationDateInput, skillsInput, companyInput, positionInput, startDateInput, endDateInput, responsibilitiesInput, aboutInput, photoInput, name, email, phone, address, photoBase64, _a, institution, degree, graduationDate, skills, company, position, startDate, endDate, responsibilities, about, emailPattern, phonePattern;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                nameInput = document.getElementById('name');
                emailInput = document.getElementById('email');
                phoneInput = document.getElementById('phone');
                addressInput = document.getElementById('address');
                institutionInput = document.getElementById('institution');
                degreeInput = document.getElementById('degree');
                graduationDateInput = document.getElementById('graduation-date');
                skillsInput = document.getElementById('skills');
                companyInput = document.getElementById('company');
                positionInput = document.getElementById('position');
                startDateInput = document.getElementById('start-date');
                endDateInput = document.getElementById('end-date');
                responsibilitiesInput = document.getElementById('responsibilities');
                aboutInput = document.getElementById('about-me');
                photoInput = document.getElementById('photo');
                // Basic validation
                if (!nameInput || !emailInput || !phoneInput || !addressInput ||
                    !institutionInput || !degreeInput || !graduationDateInput ||
                    !skillsInput || !companyInput || !positionInput ||
                    !startDateInput || !endDateInput || !responsibilitiesInput) {
                    alert('Please ensure all required fields are present.');
                    return [2 /*return*/, ''];
                }
                name = nameInput.value.trim();
                email = emailInput.value.trim();
                phone = phoneInput.value.trim();
                address = addressInput.value.trim();
                if (!(photoInput && ((_b = photoInput.files) === null || _b === void 0 ? void 0 : _b[0]))) return [3 /*break*/, 2];
                return [4 /*yield*/, fileToBase64(photoInput.files[0])];
            case 1:
                _a = _c.sent();
                return [3 /*break*/, 3];
            case 2:
                _a = '';
                _c.label = 3;
            case 3:
                photoBase64 = _a;
                institution = institutionInput.value.trim();
                degree = degreeInput.value.trim();
                graduationDate = graduationDateInput.value.trim();
                skills = skillsInput.value.trim();
                company = companyInput.value.trim();
                position = positionInput.value.trim();
                startDate = startDateInput.value.trim();
                endDate = endDateInput.value.trim();
                responsibilities = responsibilitiesInput.value.trim();
                about = aboutInput ? aboutInput.value.trim() : '';
                // Validate if all fields are filled
                if (!name || !email || !phone || !address || !institution ||
                    !degree || !graduationDate || !skills || !company ||
                    !position || !startDate || !endDate || !responsibilities) {
                    alert('Please fill in all required fields.');
                    return [2 /*return*/, ''];
                }
                emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert('Please enter a valid email address.');
                    return [2 /*return*/, ''];
                }
                phonePattern = /^\d{11}$/;
                if (!phonePattern.test(phone)) {
                    alert('Please enter a valid phone number (11 digits).');
                    return [2 /*return*/, ''];
                }
                // Validate dates (simple check)
                if (new Date(startDate) > new Date(endDate)) {
                    alert('End date cannot be before the start date.');
                    return [2 /*return*/, ''];
                }
                // Generate resume HTML
                return [2 /*return*/, "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <title>Resume</title>\n            <style>\n                .resume-container {\n                    width: 90%;\n                    max-width: 800px;\n                    text-align: center;\n                    margin: 0 auto;\n                    padding: 20px;\n                    box-sizing: border-box;\n                    border: 2px solid #4a0746;\n                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n                    background-color: #f1def1;\n                }\n                .resume-header img {\n                    width: 150px;\n                    height: 150px;\n                    border-radius: 50%;\n                    object-fit: cover;\n                    margin-bottom: 10px;\n                }\n                .resume-section {\n                    margin-bottom: 20px;\n                    padding: 10px;\n                    border: 1px solid #9a8d99;\n                }\n                .resume-section h2 {\n                    font-size: 20px;\n                    margin-bottom: 10px;\n                }\n            </style>\n        </head>\n        <body>\n            <div class=\"resume-container\">\n                <div class=\"resume-header\">\n                    ".concat(photoBase64 ? "<img src=\"".concat(photoBase64, "\" alt=\"Photo\"/>") : '<p>No photo available</p>', "\n                    <h1>").concat(name, "</h1>\n                    <p>Email: ").concat(email, "</p>\n                    <p>Phone: ").concat(phone, "</p>\n                    <p>Address: ").concat(address, "</p>\n                </div>\n                <div class=\"resume-section\">\n                    <h2>Education</h2>\n                    <p><strong>Institution: ").concat(institution, "</strong></p>\n                    <p>Degree: ").concat(degree, "</p>\n                    <p>Graduation Date: ").concat(graduationDate, "</p>\n                </div>\n                <div class=\"resume-section\">\n                    <h2>Skills</h2>\n                    <p>").concat(skills, "</p>\n                </div>\n                <div class=\"resume-section\">\n                    <h2>Work Experience</h2>\n                    <p><strong>").concat(company, "</strong> - ").concat(position, "</p>\n                    <p>Start Date: ").concat(startDate, "</p>\n                    <p>End Date: ").concat(endDate || 'Present', "</p>\n                    <p>Responsibilities: ").concat(responsibilities, "</p>\n                </div>\n                <div class=\"resume-section\">\n                    <h2>About</h2>\n                    <p>").concat(about, "</p>\n                </div>\n            </div>\n        </body>\n        </html>\n    ")];
        }
    });
}); };
// Event listeners and functions
document.addEventListener('DOMContentLoaded', function () {
    var generateButton = document.getElementById('generate-resume');
    var downloadButton = document.getElementById('download-resume');
    var editButton = document.getElementById('edit-resume');
    var shareButton = document.getElementById('share-resume');
    var resumeOutput = document.getElementById('resume-output');
    var resumeContent = document.getElementById('resume-content');
    var socialShare = document.getElementById('social-share');
    if (generateButton && downloadButton && editButton && shareButton && resumeOutput && resumeContent && socialShare) {
        var resumeData_1 = {};
        generateButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            var resumeHTML, nameInput, emailInput, phoneInput, addressInput, institutionInput, degreeInput, graduationDateInput, skillsInput, companyInput, positionInput, startDateInput, endDateInput, responsibilitiesInput, aboutInput, photoInput, _a;
            var _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, generateResumeHTML()];
                    case 1:
                        resumeHTML = _d.sent();
                        if (!resumeHTML) return [3 /*break*/, 5];
                        resumeContent.innerHTML = resumeHTML;
                        resumeOutput.classList.remove('hidden');
                        downloadButton.classList.remove('hidden');
                        editButton.classList.remove('hidden');
                        shareButton.classList.remove('hidden');
                        nameInput = document.getElementById('name');
                        emailInput = document.getElementById('email');
                        phoneInput = document.getElementById('phone');
                        addressInput = document.getElementById('address');
                        institutionInput = document.getElementById('institution');
                        degreeInput = document.getElementById('degree');
                        graduationDateInput = document.getElementById('graduation-date');
                        skillsInput = document.getElementById('skills');
                        companyInput = document.getElementById('company');
                        positionInput = document.getElementById('position');
                        startDateInput = document.getElementById('start-date');
                        endDateInput = document.getElementById('end-date');
                        responsibilitiesInput = document.getElementById('responsibilities');
                        aboutInput = document.getElementById('about-me');
                        photoInput = document.getElementById('photo');
                        _b = {
                            name: (nameInput === null || nameInput === void 0 ? void 0 : nameInput.value) || '',
                            email: (emailInput === null || emailInput === void 0 ? void 0 : emailInput.value) || '',
                            phone: (phoneInput === null || phoneInput === void 0 ? void 0 : phoneInput.value) || '',
                            address: (addressInput === null || addressInput === void 0 ? void 0 : addressInput.value) || '',
                            institution: (institutionInput === null || institutionInput === void 0 ? void 0 : institutionInput.value) || '',
                            degree: (degreeInput === null || degreeInput === void 0 ? void 0 : degreeInput.value) || '',
                            graduationDate: (graduationDateInput === null || graduationDateInput === void 0 ? void 0 : graduationDateInput.value) || '',
                            skills: (skillsInput === null || skillsInput === void 0 ? void 0 : skillsInput.value) || '',
                            company: (companyInput === null || companyInput === void 0 ? void 0 : companyInput.value) || '',
                            position: (positionInput === null || positionInput === void 0 ? void 0 : positionInput.value) || '',
                            startDate: (startDateInput === null || startDateInput === void 0 ? void 0 : startDateInput.value) || '',
                            endDate: (endDateInput === null || endDateInput === void 0 ? void 0 : endDateInput.value) || '',
                            responsibilities: (responsibilitiesInput === null || responsibilitiesInput === void 0 ? void 0 : responsibilitiesInput.value) || '',
                            about: (aboutInput === null || aboutInput === void 0 ? void 0 : aboutInput.value) || ''
                        };
                        if (!(photoInput && ((_c = photoInput.files) === null || _c === void 0 ? void 0 : _c[0]))) return [3 /*break*/, 3];
                        return [4 /*yield*/, fileToBase64(photoInput.files[0])];
                    case 2:
                        _a = _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = '';
                        _d.label = 4;
                    case 4:
                        resumeData_1 = (_b.photoBase64 = _a,
                            _b);
                        clearInputFields();
                        _d.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
        downloadButton.addEventListener('click', function () {
            if (resumeContent) {
                var resumeBlob = new Blob([resumeContent.innerHTML], { type: 'text/html' });
                var url = URL.createObjectURL(resumeBlob);
                var a = document.createElement('a');
                a.href = url;
                a.download = 'resume.html';
                a.click();
                URL.revokeObjectURL(url);
            }
        });
        editButton.addEventListener('click', function () {
            if (resumeOutput) {
                resumeOutput.classList.add('hidden');
                populateInputFields(resumeData_1);
            }
        });
        shareButton.addEventListener('click', function () {
            if (socialShare) {
                socialShare.classList.toggle('hidden');
            }
        });
        // Social media sharing buttons
        var shareWhatsAppButton = document.getElementById('share-whatsapp');
        var shareTwitterButton = document.getElementById('share-twitter');
        if (shareWhatsAppButton) {
            shareWhatsAppButton.addEventListener('click', function () {
                var url = "https://api.whatsapp.com/send?text=".concat(encodeURIComponent('Check out my resume! ' + window.location.href));
                window.open(url, '_blank');
            });
        }
        if (shareTwitterButton) {
            shareTwitterButton.addEventListener('click', function () {
                var url = "https://twitter.com/intent/tweet?text=".concat(encodeURIComponent('Check out my resume! ' + window.location.href));
                window.open(url, '_blank');
            });
        }
        // Toggle skills visibility
        var toggleSkillsButton_1 = document.getElementById('toggle-skills');
        var skillsContent_1 = document.getElementById('skills-content');
        if (toggleSkillsButton_1 && skillsContent_1) {
            toggleSkillsButton_1.addEventListener('click', function () {
                if (skillsContent_1.classList.contains('hidden')) {
                    skillsContent_1.classList.remove('hidden');
                    toggleSkillsButton_1.textContent = 'Hide Skills';
                }
                else {
                    skillsContent_1.classList.add('hidden');
                    toggleSkillsButton_1.textContent = 'Show Skills';
                }
            });
        }
        // Navigation toggle script
        var navToggle = document.getElementById('nav-toggle');
        var navLinks_1 = document.getElementById('nav-links');
        if (navToggle && navLinks_1) {
            navToggle.addEventListener('click', function () {
                navLinks_1.classList.toggle('active');
            });
        }
    }
});
