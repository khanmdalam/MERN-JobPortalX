import { Job } from "../models/job.model.js";

const parseExperienceLevel = (value) => {
    if (value === undefined || value === null) return NaN;
    const normalized = String(value).trim().toLowerCase();
    if (!normalized) return NaN;
    if (normalized === "fresher") return 0;

    const match = normalized.match(/\d+/);
    return match ? Number(match[0]) : NaN;
};

// admin post krega job
export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = req.id;

        if (
            !title ||
            !description ||
            !requirements ||
            !salary ||
            !location ||
            !jobType ||
            (experience === undefined || experience === null || String(experience).trim() === "") ||
            (position === undefined || position === null || String(position).trim() === "") ||
            !companyId
        ) {
            return res.status(400).json({
                message: "Somethin is missing.",
                success: false
            })
        };

        const experienceLevel = parseExperienceLevel(experience);
        const salaryValue = Number(salary);
        const positionValue = Number(position);

        if (Number.isNaN(experienceLevel) || Number.isNaN(salaryValue) || Number.isNaN(positionValue)) {
            return res.status(400).json({
                message: "Please enter valid numeric values for salary, position and experience (e.g. fresher, 1, 2 years).",
                success: false
            });
        }

        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: salaryValue,
            location: String(location).trim(),
            jobType,
            experienceLevel,
            position: positionValue,
            company: companyId,
            created_by: userId
        });
        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
}
// student k liye
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
                { location: { $regex: keyword, $options: "i" } },
            ]
        };
        const jobs = await Job.find(query).populate({
            path: "company"
        }).sort({ createdAt: -1 });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
// student
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications"
        });
        if (!job) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({ job, success: true });
    } catch (error) {
        console.log(error);
    }
}
// admin kitne job create kra hai abhi tk
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId }).populate({
            path:'company',
            createdAt:-1
        });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
