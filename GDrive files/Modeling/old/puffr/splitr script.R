setwd("C:/Users/Jordan Wingenroth/Google Drive/Grad school/September 2017-/Sustainability & Society (ESPM 261)/Term project/Modeling/puffr")

library(SplitR)
library(dplyr)

# Create the `trajectory_model` object, add
# a grid of starting locations, add run
# parameters, and execute the model runs
trajectory_model <-
  create_traj_model() %>%
  add_grid(
    lat = 49.0,
    lon = -123.0,
    range = c(0.8, 0.8),
    division = c(0.2, 0.2)) %>%
  add_params(
    height = 50,
    duration = 6,
    run_period = "2015-07-01",
    daily_hours = c(0, 12),
    direction = "backward",
    met_type = "reanalysis") %>%
  run_model()


