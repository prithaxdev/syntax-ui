import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Dashboard from "./pages/dashboard.tsx";
import DashboardContent from "./pages/dashboard/content.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardContent title="Dashboard" />} />
          <Route
            path="analytics"
            element={<DashboardContent title="Analytics" />}
          />
          <Route path="tables" element={<DashboardContent title="Tables" />} />
          <Route path="forms" element={<DashboardContent title="Forms" />} />
          <Route
            path="profile"
            element={<DashboardContent title="User Profile" />}
          />
          <Route path="notes" element={<DashboardContent title="Notes" />} />
          <Route
            path="tickets"
            element={<DashboardContent title="Tickets" />}
          />
          <Route path="blogs">
            <Route
              path="post"
              element={<DashboardContent title="Blog Post" />}
            />
            <Route
              path="detail"
              element={<DashboardContent title="Blog Detail" />}
            />
            <Route
              path="edit"
              element={<DashboardContent title="Blog Edit" />}
            />
            <Route
              path="create"
              element={<DashboardContent title="Blog Create" />}
            />
            <Route
              path="manage"
              element={<DashboardContent title="Manage Blogs" />}
            />
          </Route>
          <Route path="shadcn-forms">
            <Route
              path="button"
              element={<DashboardContent title="Button" />}
            />
            <Route path="input" element={<DashboardContent title="Input" />} />
            <Route
              path="select"
              element={<DashboardContent title="Select" />}
            />
            <Route
              path="checkbox"
              element={<DashboardContent title="Checkbox" />}
            />
            <Route path="radio" element={<DashboardContent title="Radio" />} />
          </Route>
          <Route path="form-layouts">
            <Route
              path="horizontal"
              element={<DashboardContent title="Forms Horizontal" />}
            />
            <Route
              path="vertical"
              element={<DashboardContent title="Forms Vertical" />}
            />
            <Route
              path="validation"
              element={<DashboardContent title="Forms Validation" />}
            />
            <Route
              path="examples"
              element={<DashboardContent title="Forms Examples" />}
            />
            <Route
              path="wizard"
              element={<DashboardContent title="Forms Wizard" />}
            />
          </Route>
          <Route path="cards">
            <Route
              path="ecommerce"
              element={<DashboardContent title="Ecommerce Actions" />}
            />
            <Route
              path="course"
              element={<DashboardContent title="Course" />}
            />
            <Route
              path="campaign"
              element={<DashboardContent title="Campaign Performance" />}
            />
            <Route
              path="products"
              element={<DashboardContent title="Selling Products" />}
            />
            <Route
              path="timeline"
              element={<DashboardContent title="Activity Timeline" />}
            />
          </Route>
          <Route path="banners">
            <Route
              path="analytic"
              element={<DashboardContent title="Analytic Banner" />}
            />
          </Route>
          <Route path="charts">
            <Route
              path="sales"
              element={<DashboardContent title="Sales Report" />}
            />
            <Route
              path="weekly"
              element={<DashboardContent title="Weekly Sales" />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
